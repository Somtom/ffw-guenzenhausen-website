<template>
  <nav class="bg-white pt-4 px-4 shadow-md">
    <div
      class="flex items-center justify-between flex-wrap lg:justify-center flex-shrink-0 text-blue-900"
    >
      <span class="uppercase font-semibold text-xl">
        <nuxt-link to="/">
          <img class="h-32" src="~/assets/ffw-logo.png" />
        </nuxt-link>
      </span>

      <div class="lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 hover:text-blue-700 hover:border-blue-700"
          @click="showMenu = !showMenu"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <transition name="fade">
        <div
          v-if="showMenu"
          class="lg:hidden w-full block flex-grow max-h-full"
        >
          <div class="text-sm lg:flex-grow">
            <NavItem
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              :link-text="item.label"
            />
          </div>
        </div>
      </transition>
    </div>

    <div class="mt-3">
      <div
        class="hidden w-full flex justify-center flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <NavItem
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :link-text="item.label"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from '@/components/NavItem'
export default {
  components: {
    NavItem,
  },

  async fetch() {
    const data = await this.$content('navigation').fetch()
    this.navItems = data.navItems
  },

  data() {
    return {
      showMenu: false,
      navItems: [],
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
