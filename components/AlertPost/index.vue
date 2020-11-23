<template>
  <article>
    <h1>{{ title }}</h1>

    <AlertInfo
      :time="time"
      :address="address"
      :message="message"
      :title="title"
    />

    <div class="mt-8 text-xl" v-html="htmlText"></div>

    <ImageGrid :images="images" />
  </article>
</template>

<script>
import AlertInfo from '@/components/AlertInfo'
import ImageGrid from '@/components/ImageGrid'

export default {
  components: {
    AlertInfo,
    ImageGrid,
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
    address: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    text: {
      type: Object,
      default: () => {},
    },
    images: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    htmlText() {
      return this.$storyapi.richTextResolver.render(this.text)
    },
  },

  created() {
    console.log(this.images)
  },
}
</script>
