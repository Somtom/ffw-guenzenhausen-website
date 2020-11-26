<template>
  <div>
    <Post v-bind="story.content" />
  </div>
</template>

<script>
import getStoryblokStory from '@/helpers/get-storyblok-story'
import storyblokLivePreview from '@/mixins/storyblok-live-preview'
import Post from '@/components/Post'

export default {
  components: {
    Post,
  },

  mixins: [storyblokLivePreview],

  async asyncData({ $content, params, app, route, error }) {
    const res = await getStoryblokStory(app, route, error)
    const story = res.story
    return { story }
  },
}
</script>
