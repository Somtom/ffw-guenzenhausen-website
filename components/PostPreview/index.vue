<template>
  <nuxt-link :to="fullSlug">
    <div class="h-56 lg:flex my-3 justify-center">
      <PreviewImage :img-src="imgSrc">
        <AlertOutline />
      </PreviewImage>

      <div
        class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal shadow-md"
      >
        <div class="flex justify-between">
          <h1 class="text-2xl mt-0">
            {{ title }}
          </h1>
          <div class="text-gray-600 mt-0">
            {{ formattedTime }}
          </div>
        </div>

        <div class="text-lg mt-3" v-html="previewText"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import AlertOutline from '@/assets/icons/notifications_none-white-48dp.svg'
import PreviewImage from '@/components/PreviewImage'

export default {
  components: {
    PreviewImage,
    AlertOutline,
  },

  props: {
    fullSlug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: null,
    },
  },

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleString()
    },

    previewText() {
      const text = this.$storyapi.richTextResolver
        .render(this.text)
        .slice(0, 250)
      return `${text} ...`
    },
  },
}
</script>
