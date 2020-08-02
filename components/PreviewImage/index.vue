<template>
  <div
    class="rounded-t lg:rounded-l lg:rounded-t-none h-48 lg:h-auto lg:w-56 flex-none bg-cover text-center overflow-hidden shadow-md bg-gray-400"
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
