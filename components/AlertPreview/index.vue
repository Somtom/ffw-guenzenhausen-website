<template>
  <nuxt-link :to="`/alerts/${id}`">
    <div class="max-w-md w-full lg:max-w-full lg:flex my-3">
      <PreviewImage :img-src="imgSrc">
        <AlertOutline />
      </PreviewImage>

      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md"
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
    id: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
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
