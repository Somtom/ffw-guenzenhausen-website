const StoryblokClient = require('storyblok-js-client')
const { STORYBLOK_API_KEY, ALERT_FUNCTION_TOKEN } = process.env
const Storyblok = new StoryblokClient({
  oauthToken: STORYBLOK_API_KEY,
})

exports.handler = function (event, context, callback) {
  const alert = JSON.parse(event.body)
  console.log('Alert: ', alert)
  let statusCode = 401

  if (ALERT_FUNCTION_TOKEN === event.queryStringParameters.token) {
    // Create alert story
    const time = new Date(alert.ts_create * 1000)
    const name = `${time.toISOString().substr(0, 10)} - ${alert.title}`
    Storyblok.post('spaces/90003/stories/', {
      story: {
        name,
        slug: alert.id,
        parent_id: 16915628,
        content: {
          component: 'AlertPost',
          title: alert.title || alert.message,
          time,
          address: alert.address,
          message: alert.title,
        },
      },
      publish: 0,
    }).catch((error) => {
      console.log(error)
    })

    statusCode = 200
  }

  callback(null, {
    statusCode,
  })
}
