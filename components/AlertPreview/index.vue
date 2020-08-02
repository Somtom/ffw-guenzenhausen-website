<template>
  <nuxt-link :to="`alerts/${id}`">
    <div class="max-w-md w-full lg:max-w-full lg:flex my-3">
      <div
        class="rounded-t lg:rounded-l lg:rounded-t-none h-48 lg:h-auto lg:w-56 flex-none bg-cover text-center overflow-hidden shadow-md bg-gray-400"
        :style="`background-image: url('${imgSrc}')`"
      >
        <div
          v-if="!imgSrc"
          class="flex items-center justify-center h-full w-full"
        >
          <AlertOutline />
        </div>
      </div>

      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-md"
      >
        <h1 class="text-2xl mt-0">{{ title }}</h1>
        <div class="flex mb-3 items-center">
          <QueryBuilderBlack class="flex-none" />
          <div class="ml-3">{{ formattedTime }}</div>
        </div>
        <div class="flex mb-3 items-center">
          <Place class="flex-none" />
          <div class="ml-3">
            {{ address }}
          </div>
        </div>
        <div class="flex mb-3 items-center">
          <ErrorOutline class="flex-none" />
          <div class="ml-3">{{ message }}</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import QueryBuilderBlack from '@/assets/icons/query_builder-black-36dp.svg'
import Place from '@/assets/icons/place-black-36dp.svg'
import ErrorOutline from '@/assets/icons/error_outline-black-36dp.svg'
import AlertOutline from '@/assets/icons/notifications_none-white-48dp.svg'

export default {
  components: {
    QueryBuilderBlack,
    Place,
    ErrorOutline,
    AlertOutline,
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

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleString()
    },
  },
}
</script>
