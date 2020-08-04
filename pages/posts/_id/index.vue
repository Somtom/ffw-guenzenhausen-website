<template>
  <div>
    <Post v-bind="post" />
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
    const post = res.story.content
    post.time = res.story.first_published_at
    return { post }
  },
}
</script>
