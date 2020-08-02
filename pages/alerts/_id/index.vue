<template>
  <div>
    <AlertPost
      v-bind="post"
      :html-text="htmlText"
      :img-src="post.titleImage.filename"
    ></AlertPost>
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
    // console.log(params)
    // const alert = await $content('alerts', params.id).fetch()
    // console.log(alert)
    const res = await getStoryblokStory(app, route, error)
    console.log(res)
    const post = res.story.content
    return { post }
  },

  computed: {
    htmlText() {
      return this.$storyapi.richTextResolver.render(this.post.text)
    },
  },
}
</script>
