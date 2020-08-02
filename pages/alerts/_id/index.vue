<template>
  <div>
    <AlertPost :id="alert.slug" v-bind="alert"></AlertPost>
  </div>
</template>

<script>
import AlertPost from '@/components/AlertPost'
export default {
  components: {
    AlertPost,
  },

  async asyncData({ $content, params }) {
    console.log(params)
    const alert = await $content('alerts', params.id).fetch()
    console.log(alert)
    return { alert }
  },
}
</script>
