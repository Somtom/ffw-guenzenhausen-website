<template>
  <div class="flex flex-wrap items-center mt-6 py-1">
    <div v-for="(image, i) in images" :key="i" class="p-1 w-1/2 lg:w-1/4">
      <img
        class="h-64 object-cover"
        :src="previewImage(image.filename)"
        :alt="image.name"
      />
    </div>
  </div>
</template>

<script>
import transformImage from '@/helpers/transformImage'

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  methods: {
    previewImage(img) {
      return transformImage(img, '400x400')
    },
  },
}
</script>
