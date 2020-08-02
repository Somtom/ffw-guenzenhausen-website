import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { STORYBLOK_TOKEN } from '@/helpers/config'

function AuthLink({ context }) {
  return new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        token: STORYBLOK_TOKEN,
        version:
          (context && context.query && context.query._storyblok) ||
          process.env.NODE_ENV === 'development'
            ? 'draft'
            : 'published',
      },
    })
    return forward(operation)
  })
}

export default ({ app, error }) => {
  const cache = new InMemoryCache()
  const link = ApolloLink.from([
    new AuthLink(app),
    new HttpLink({
      uri: 'https://gapi.storyblok.com/v1/api',
    }),
  ])

  return {
    defaultHttpLink: false,
    link,
    cache,
  }
}
