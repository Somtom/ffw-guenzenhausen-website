const StoryblokClient = require('storyblok-js-client')
const { STORYBLOK_API_KEY, ALERT_FUNCTION_TOKEN } = process.env
const Storyblok = new StoryblokClient({
  oauthToken: STORYBLOK_API_KEY,
})

exports.handler = function (event, context, callback) {
  const alert = JSON.parse(event.body)
  let statusCode = 401

  if (ALERT_FUNCTION_TOKEN === event.queryStringParameters.token) {
    // Create alert story
    Storyblok.post('spaces/90003/stories/', {
      story: {
        name: alert.id,
        slug: alert.id,
        parent_id: 16915628,
        content: {
          component: 'AlertPost',
          title: alert.title || alert.message,
          time: new Date(alert.ts_create * 1000),
          address: alert.address,
          message: alert.text,
        },
      },
      publish: 1,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    statusCode = 200
  }

  callback(null, {
    statusCode,
  })
}
