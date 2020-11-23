<template>
  <div class="flex flex-wrap items-center mt-6 py-1">
    <div v-for="(image, i) in images" :key="i" class="p-1 w-1/2 lg:w-1/4">
      <img
        class="h-64 object-cover cursor-pointer"
        :src="previewImage(image.filename)"
        :alt="image.name"
        @click="openImage(image)"
      />
    </div>
    <Modal :show-modal="modalOpen" @closed="closeImage">
      <img
        v-if="modalImage"
        class="w-full mx-auto"
        :src="modalImage.filename"
        :alt="modalImage.name"
        @click="closeImage"
      />
    </Modal>
  </div>
</template>

<script>
import transformImage from '@/helpers/transformImage'
import Modal from '@/components/Modal'

export default {
  components: { Modal },

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      modalImage: this.images[0],
      modalOpen: false,
    }
  },

  methods: {
    previewImage(img) {
      return transformImage(img, '400x400')
    },

    closeImage() {
      this.modalOpen = false
    },

    openImage(image) {
      this.modalImage = image
      this.modalOpen = true
    },
  },
}
</script>
