<template>
  <div
    class="w-full h-56 bg-cover text-center bg-gray-400"
    :style="`background-image: url('${imgSrc}')`"
  >
    <div v-if="!imgSrc" class="flex items-center justify-center h-full w-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: null,
    },
  },
}
</script>
