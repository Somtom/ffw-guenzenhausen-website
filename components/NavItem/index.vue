<template>
  <div>
    <div
      v-if="$route.path === to"
      class="border-b-2 border-blue-600 block mt-4 lg:inline-block lg:mt-0 mr-4 pb-1"
    >
      <nuxt-link class="text-lg text-blue-600" :to="to">
        {{ linkText }}
      </nuxt-link>
    </div>
    <div
      v-else
      class="border-b-2 border-transparent hover:border-blue-600 block mt-4 lg:inline-block lg:mt-0 mr-4 pb-1"
    >
      <nuxt-link class="text-lg hover:text-blue-600 text-blue-900" :to="to">
        {{ linkText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
}
</script>
