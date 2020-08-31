<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="base-modal fixed left-0 right-0 top-0 h-screen min-h-screen justify-center md:items-center overflow-y-auto p-4 animate-fade-in z-30 bg-black bg-opacity-75"
    >
      <div
        class="absolute right-0 top-0 p-3 cursor-pointer text-white text-xl font-bold"
        @click="onModalClosed"
      >
        &#10799;
      </div>
      <div class="md:p-6 w-full h-full">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    document.body.appendChild(this.$el)
    window.addEventListener('keydown', this.onEscaped)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.onEscaped)
  },

  methods: {
    onModalClosed() {
      this.$emit('closed')
    },

    onEscaped(event) {
      if (event.key === 'Escape') {
        this.onModalClosed()
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
