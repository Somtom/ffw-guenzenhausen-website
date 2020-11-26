<template>
  <div>
    <LoadingSpinner v-show="$apollo.loading" />
    <h1 class="mb-6">Einsatzübersicht</h1>

    <CustomSelect
      v-model="yearFilter"
      class="mb-6"
      label="Jahr"
      :options="yearOptions"
      @change="yearFilter = $event.target.value"
    />

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
import CustomSelect from '@/components/CustomSelect'
import LoadingSpinner from '@/components/LoadingSpinner'
import query from './query.graphql'

export default {
  components: {
    AlertPreview,
    Paginator,
    CustomSelect,
    LoadingSpinner,
  },

  data() {
    return {
      alerts: [],
      paginator: {
        totalEntries: null,
        pageSize: 10,
        currentPage: 1,
      },
      yearFilter: '',
    }
  },

  apollo: {
    alerts: {
      query,
      variables() {
        return {
          pageSize: this.paginator.pageSize,
          currentPage: this.paginator.currentPage,
          dateStart: this.yearFilter ? `${this.yearFilter}-01-01` : null,
          dateEnd: this.yearFilter ? `${this.yearFilter}-12-31` : null,
        }
      },
      update(data) {
        this.paginator.totalEntries = data.AlertpostItems.total
        return data.AlertpostItems.items
      },
    },
  },

  computed: {
    alertYears() {
      let currentYear = new Date().getFullYear()
      const startYear = 2018
      const years = []
      while (currentYear >= startYear) {
        years.push(currentYear--)
      }
      return years
    },

    yearOptions() {
      const options = [{ label: 'Alle', value: null }]
      this.alertYears.forEach((year) =>
        options.push({ label: year, value: year })
      )
      return options
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
