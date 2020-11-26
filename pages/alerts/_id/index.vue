<template>
  <div>
    <AlertPost v-bind="story.content" />
  </div>
</template>

<script>
import getStoryblokStory from '@/helpers/get-storyblok-story'
import storyblokLivePreview from '@/mixins/storyblok-live-preview'
import AlertPost from '@/components/AlertPost'

export default {
  components: {
    AlertPost,
  },

  mixins: [storyblokLivePreview],

  async asyncData({ $content, params, app, route, error }) {
    const res = await getStoryblokStory(app, route, error)
    const story = res.story
    return { story }
  },
}
</script>
