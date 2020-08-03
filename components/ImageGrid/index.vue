<template>
  <div class="flex flex-wrap items-center mt-6 py-1">
    <div v-for="(image, i) in images" :key="i" class="p-1 w-1/2 lg:w-1/4">
      <img class="h-64 object-cover" :src="image.filename" :alt="image.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
