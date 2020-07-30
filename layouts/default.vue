<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div
      class="flex-grow mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl"
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
    title: 'Schlossbauer Haimendorf',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dies ist die Internetpräsenz der Schlossbauern in Haimendorf',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'schlossbauer, haimendorf, bauernhof haimendorf, schlossbauer haimendorf,zimmer haimendorf, zimmer Montagearbeiter',
      },
    ],
  },
}
</script>
