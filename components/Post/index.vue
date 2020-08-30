<template>
  <article>
    <PostHeader v-if="titleImage.filename" :img-src="titleImage.filename" />

    <div class="flex justify-between">
      <h1>{{ title }}</h1>
      <div class="text-gray-400 mt-6">{{ formattedTime }}</div>
    </div>

    <RichText class="mt-8 text-xl" :text="text" />

    <ImageGrid :images="images" />
  </article>
</template>

<script>
import PostHeader from '@/components/PostHeader'
import ImageGrid from '@/components/ImageGrid'
import RichText from '@/components/RichText'

export default {
  components: {
    PostHeader,
    ImageGrid,
    RichText,
  },

  props: {
    time: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: Object,
      default: () => {},
    },
    titleImage: {
      type: Object,
      default: () => {},
    },
    images: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleDateString()
    },

    htmlText() {
      return this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>
