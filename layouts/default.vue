<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div
      class="py-6 container flex-grow mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl"
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
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
