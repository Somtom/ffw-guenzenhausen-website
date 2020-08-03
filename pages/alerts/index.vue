<template>
  <div>
    <AlertPreview
      v-for="alert in alerts"
      :key="alert.full_slug"
      :full-slug="alert.full_slug"
      :img-src="previewImage(alert)"
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

  methods: {
    previewImage(alert) {
      console.log(alert)
      return alert.content.previewImage
        ? alert.content.previewImage.filename
        : ''
    },
  },
}
</script>
