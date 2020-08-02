<template>
  <div>
    <AlertPreview
      v-for="alert in alerts"
      :key="alert.full_slug"
      :full-slug="alert.full_slug"
      :img-src="alert.content.titleImage.filename"
      v-bind="alert.content"
    ></AlertPreview>
  </div>
</template>

<script>
import AlertPreview from '@/components/AlertPreview'
import query from './query.graphql'
export default {
  components: {
    AlertPreview,
  },

  data() {
    return {
      alerts: [],
    }
  },

  apollo: {
    alerts: {
      query,
      update(data) {
        return data.AlertpostItems.items
      },
    },
  },
}
</script>
