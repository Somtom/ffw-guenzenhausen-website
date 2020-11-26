<template>
  <div class="min-h-screen flex flex-col">
    <LoadingSpinner v-show="$apollo.loading" />
    <Navbar :navbar-links="navbarLinks" />
    <div
      class="py-6 container flex-grow mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl"
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblok-live-preview'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'
import query from './query.graphql'

export default {
  components: {
    Navbar,
    Footer,
    LoadingSpinner,
  },

  mixins: [storyblokLivePreview],

  data() {
    return {
      navbarLinks: [],
    }
  },

  apollo: {
    navbarLinks: {
      query,
      update(data) {
        return data.ContentNode ? data.ContentNode.content.navbarLinks : []
      },
    },
  },

  head: {
    title: 'Feuerwehr Günzenhausen',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dies ist die Internetpräsenz der Feuerwehr Günzenhausen',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'günzenhausen, feuerwehr, eching, feuerwehr günzenhausen',
      },
    ],
  },
}
</script>
