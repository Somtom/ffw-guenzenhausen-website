<template>
  <div @mouseenter="showSubmenus = true" @mouseleave="showSubmenus = false">
    <div class="mr-4">
      <div
        v-if="isActive"
        class="block mt-4 lg:inline-block lg:mt-0 pb-1 border-b-2 border-blue-600 text-lg text-blue-600 inline-block"
      >
        <nuxt-link v-if="to" :to="to"> {{ linkText }} </nuxt-link>
        <div v-else>
          {{ linkText }}
        </div>
      </div>

      <div
        v-else
        class="border-b-2 border-transparent hover:border-blue-600 block mt-4 lg:inline-block lg:mt-0 pb-1 text-lg hover:text-blue-600 text-blue-900"
      >
        <nuxt-link v-if="to" :to="to">
          {{ linkText }}
        </nuxt-link>
        <div v-else>
          {{ linkText }}
        </div>
      </div>

      <div v-if="subItems.length" class="inline-block align-middle">
        <ArrowDown />
      </div>
    </div>

    <div
      v-if="subItemsVisible"
      class="absolute bottom-right w-56 pt-2 bg-white shadow-md pl-1"
    >
      <nuxt-link
        v-for="item in subItems"
        :key="item.to"
        class="block hover:text-blue-600 text-blue-900 py-2"
        :to="item.to"
      >
        {{ item.linkText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ArrowDown from '@/assets/icons/arrow_drop_down-24px.svg'

export default {
  components: { ArrowDown },
  props: {
    to: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    subItems: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      showSubmenus: false,
    }
  },

  computed: {
    isActive() {
      const path = this.$route.path
      const mainItemActive = this.$route.path === this.to
      const subItemActive = this.subItems.map((item) => item.to).includes(path)
      return mainItemActive || subItemActive
    },

    route() {
      return this.$route
    },

    subItemsVisible() {
      return this.showSubmenus && this.subItems.length
    },
  },
}
</script>
