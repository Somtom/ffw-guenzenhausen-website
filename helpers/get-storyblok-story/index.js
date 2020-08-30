import query from './query.graphql'

export default async (app, route, error) => {
  const { data } = await app.apolloProvider.clients.defaultClient.query({
    query,
    errorPolicy: 'all',
    variables: {
      fullSlug: route.path.slice(1),
    },
  })

  if (!data.ContentNode) {
    // there is no story from storyblok
    return error({ statusCode: 404 })
  }

  return {
    story: data.ContentNode,
  }
}
