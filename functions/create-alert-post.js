const StoryblokClient = require('storyblok-js-client')
const axios = require('axios')

const {
  STORYBLOK_API_KEY,
  ALERT_FUNCTION_TOKEN,
  DIVERA_ACCESS_KEY,
  STORYBLOK_SPACE_ID,
  STORYBLOK_ALERT_FOLDER,
} = process.env

const Storyblok = new StoryblokClient({
  oauthToken: STORYBLOK_API_KEY,
})

async function getDiveraAlert(id, callback) {
  /* 
  Wait for 5 Seconds to receive second alarm which completes the information
  This can be removed as soon as the SMS alarm fallback is removed
  */
  await new Promise((resolve, reject) => setTimeout(resolve, 5000))

  // Get alarm detail data
  const url = `https://www.divera247.com/api/v2/alarms/${id}`
  return axios
    .get(url, { params: { accesskey: DIVERA_ACCESS_KEY } })
    .then((res) => {
      return res.data.data
    })
    .catch((error) => console.log(error))
}

function createStoryFromAlert(alert) {
  const time = new Date(alert.date * 1000)
  const name = `${time.toISOString().substr(0, 10)} - ${alert.title}`

  const story = {
    name,
    slug: alert.id,
    parent_id: STORYBLOK_ALERT_FOLDER,
    content: {
      component: 'AlertPost',
      title: alert.title || alert.message,
      time,
      addressRaw: alert.address,
      message: alert.title,
      text: {
        content: [
          {
            type: 'text',
            text:
              'Beschreibung und Bilder folgen. Erstmal müssen wir uns um den Einsatz kümmern.',
          },
        ],
        type: 'doc',
      },
    },
  }

  // Only publish if publish criteria fulfilled
  const regex = RegExp('(^|\\b)(probealarm|test)(\\b|$)')
  const isTestAlert =
    regex.test(alert.title.toLocaleLowerCase()) ||
    regex.test(alert.title.toLocaleLowerCase())
  const canBePublished = !isTestAlert && !alert.private_mode
  if (canBePublished) {
    story.publish = 1

    Storyblok.post(`spaces/${STORYBLOK_SPACE_ID}/stories/`, {
      story,
    }).catch((error) => {
      console.log(error)
    })
  } else {
    console.log('Story cannot be published')
  }
}

exports.handler = function (event, context, callback) {
  let statusCode = 401

  if (ALERT_FUNCTION_TOKEN !== event.queryStringParameters.token) {
    return callback(null, {
      statusCode,
    })
  }

  // Get alert data from Divera to be able to check if it is from the control center
  const webhookData = JSON.parse(event.body)
  getDiveraAlert(webhookData.id, callback).then((alert) => {
    if (!alert) {
      console.log('No alert received from Divera')
      return callback(null, {
        statusCode,
      })
    }
    console.log('Alert: ', alert)
    // Create alert story
    createStoryFromAlert(alert)

    statusCode = 200

    return callback(null, {
      statusCode,
    })
  })
}
