<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages/index').fetch()
    return {
      page,
    }
  },
}
</script>
