<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblok-live-preview'
import getStoryblokStory from '@/helpers/get-storyblok-story'

export default {
  mixins: [storyblokLivePreview],
  async asyncData({ app, route, error }) {
    const res = await getStoryblokStory(app, route, error)
    const blok = res.story.content
    return { blok }
  },
}
</script>
