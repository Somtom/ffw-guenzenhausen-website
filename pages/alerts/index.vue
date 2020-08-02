<template>
  <div>
    <AlertPreview
      v-for="(a, index) in alerts"
      :id="a.slug"
      :key="index"
      v-bind="a"
    ></AlertPreview>
  </div>
</template>

<script>
import AlertPreview from '@/components/AlertPreview'
export default {
  components: {
    AlertPreview,
  },

  async asyncData({ $content }) {
    const alerts = await $content('alerts').sortBy('time', 'desc').fetch()
    console.log(alerts)
    return { alerts }
  },
}
</script>
