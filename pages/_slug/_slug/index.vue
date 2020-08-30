<template>
  <div>
    <component :is="blok.component" v-bind="blok" />
  </div>
</template>

<script>
import getStoryblokStory from '@/helpers/get-storyblok-story'
import storyblokLivePreview from '@/mixins/storyblok-live-preview'
import components from '@/components/storyblok/storyblokComponents'

export default {
  components,

  mixins: [storyblokLivePreview],

  async asyncData({ $content, params, app, route, error }) {
    const res = await getStoryblokStory(app, route, error)
    const blok = res.story.content
    return { blok }
  },
}
</script>
