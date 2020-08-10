<template>
  <nuxt-link :to="fullSlug">
    <div class="lg:h-56 lg:flex my-3 justify-center">
      <PreviewImage :img-src="imgPreview">
        <CropOriginal />
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

        <div class="text-lg mt-3 font-normal" v-html="previewText"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import CropOriginal from '@/assets/icons/crop_original-white-48dp.svg'
import transformImage from '@/helpers/transformImage'
import PreviewImage from '@/components/PreviewImage'

export default {
  components: {
    PreviewImage,
    CropOriginal,
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
      type: Object,
      default: () => {},
    },
    imgSrc: {
      type: String,
      default: null,
    },
  },

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleDateString()
    },

    previewText() {
      let text = this.$storyapi.richTextResolver.render(this.text)
      if (text.length > 250) {
        text = `${text.slice(0, 250)}...`
      }
      return text
    },

    imgPreview() {
      return transformImage(this.imgSrc, '400x400')
    },
  },
}
</script>
