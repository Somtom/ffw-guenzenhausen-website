<template>
  <div>
    <h1 class="mb-6">Einsatzübersicht</h1>

    <AlertPreview
      v-for="alert in alerts"
      :key="alert.full_slug"
      :full-slug="alert.full_slug"
      :img-src="previewImage(alert)"
      v-bind="alert.content"
    ></AlertPreview>

    <Paginator v-model="paginator" />
  </div>
</template>

<script>
import AlertPreview from '@/components/AlertPreview'
import Paginator from '@/components/Paginator'
import query from './query.graphql'

export default {
  components: {
    AlertPreview,
    Paginator,
  },

  data() {
    return {
      alerts: [],
      paginator: {
        totalEntries: null,
        pageSize: 10,
        currentPage: 1,
      },
    }
  },

  apollo: {
    alerts: {
      query,
      variables() {
        return {
          pageSize: this.paginator.pageSize,
          currentPage: this.paginator.currentPage,
          dateStart: null,
          dateEnd: null,
        }
      },
      update(data) {
        this.paginator.totalEntries = data.AlertpostItems.total
        return data.AlertpostItems.items
      },
    },
  },

  methods: {
    previewImage(alert) {
      return alert.content.previewImage
        ? alert.content.previewImage.filename
        : ''
    },
  },
}
</script>
