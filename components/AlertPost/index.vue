<template>
  <article>
    <nuxt-link :to="`alerts/${id}`">
      <div class="flex flex-wrap items-center">
        <div v-if="imgSrc" class="w-full bg-gray-100">
          <img
            v-if="imgSrc"
            class="w-full h-56 object-cover"
            :src="imgSrc"
            alt="Alert image"
          />
        </div>

        <div class="p-4">
          <h1 class="mt-0">{{ title }}</h1>
          <div class="flex mb-3 items-center">
            <QueryBuilderBlack class="flex-none" />
            <div class="ml-3">{{ formattedTime }}</div>
          </div>
          <div class="flex mb-3 items-center">
            <Place class="flex-none" />
            <div class="ml-3 overflow-hidden">
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
  </article>
</template>

<script>
import QueryBuilderBlack from '@/assets/icons/query_builder-black-36dp.svg'
import Place from '@/assets/icons/place-black-36dp.svg'
import ErrorOutline from '@/assets/icons/error_outline-black-36dp.svg'

export default {
  components: {
    QueryBuilderBlack,
    Place,
    ErrorOutline,
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
