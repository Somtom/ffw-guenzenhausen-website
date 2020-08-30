<template>
  <div class="mb-12 h-80 flex flex-col">
    <div class="w-full relative">
      <!-- Slides -->
      <template v-for="(image, i) in images">
        <img
          v-show="currentIndex === i"
          :key="i"
          class="w-full h-80 object-cover flex items-center rounded-lg transition-all duration-200"
          :src="image"
          alt="image slide"
        />
      </template>

      <!-- Prev/Next Arrows -->
      <div class="absolute inset-0 flex">
        <div class="flex items-center justify-start w-1/2">
          <button
            class="bg-white text-blue-900 hover:text-blue-600 font-bold hover:shadow-lg rounded-full w-12 h-12 ml-1 opacity-75"
            @click="prevImage"
          >
            &#8592;
          </button>
        </div>
        <div class="flex items-center justify-end w-1/2">
          <button
            class="bg-white text-blue-900 hover:text-blue-600 font-bold hover:shadow-lg rounded-full w-12 h-12 mr-1 opacity-75"
            @click="nextImage"
          >
            &#8594;
          </button>
        </div>
      </div>
      <!-- Buttons -->
      <div class="absolute w-full flex items-center justify-center px-4">
        <template v-for="(image, i) in images">
          <button
            :key="i"
            class="flex w-4 h-4 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-blue-300 hover:shadow-lg"
            :class="{
              'bg-blue-600': currentIndex === i,
              'bg-blue-900': currentIndex !== i,
            }"
            @click="currentIndex = i"
          ></button>
        </template>
      </div>
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
  data() {
    return {
      currentIndex: 0,
      timer: null,
    }
  },

  mounted() {
    this.resetTimer()
  },

  methods: {
    nextImage() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1
      this.resetTimer()
    },

    prevImage() {
      this.currentIndex =
        this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1
      this.resetTimer()
    },

    resetTimer() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.nextImage()
      }, 6000)
    },
  },
}
</script>
<style>
.snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
