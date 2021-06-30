<template>
  <div>
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
    time: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: true,
    },
  },

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleString()
    },
  },
}
</script>
