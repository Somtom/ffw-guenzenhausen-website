<template>
  <nuxt-link :to="fullSlug">
    <div class="lg:flex my-3 justify-center">
      <PreviewImage :img-src="imgSrc">
        <AlertOutline />
      </PreviewImage>

      <div
        class="flex flex-col w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal shadow-md"
      >
        <h1 class="text-2xl mt-0">
          {{ title }}
        </h1>
        <AlertInfo :time="time" :address="address" :message="message" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import AlertOutline from '@/assets/icons/notifications_none-white-48dp.svg'
import PreviewImage from '@/components/PreviewImage'
import AlertInfo from '@/components/AlertInfo'

export default {
  components: {
    PreviewImage,
    AlertOutline,
    AlertInfo,
  },

  props: {
    fullSlug: {
      type: String,
      required: true,
    },
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
    imgSrc: {
      type: String,
      default: null,
    },
  },
}
</script>
