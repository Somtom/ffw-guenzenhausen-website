<template>
  <div>
    <LoadingSpinner v-if="$apollo.loading" />
    <h1 class="mb-6">Beiträge</h1>

    <CustomSelect
      v-model="yearFilter"
      class="mb-6"
      label="Jahr"
      :options="yearOptions"
    />

    <PostPreview
      v-for="post in posts"
      :key="post.full_slug"
      :full-slug="post.full_slug"
      :img-src="previewImage(post)"
      :images="post.images || []"
      :text="post.content.text || {}"
      v-bind="post.content"
    ></PostPreview>

    <Paginator v-model="paginator" />
  </div>
</template>

<script>
import Paginator from '@/components/Paginator'
import PostPreview from '@/components/PostPreview'
import CustomSelect from '@/components/CustomSelect'
import LoadingSpinner from '@/components/LoadingSpinner'
import query from './query.graphql'

export default {
  components: {
    PostPreview,
    Paginator,
    CustomSelect,
    LoadingSpinner,
  },

  data() {
    return {
      posts: [],
      paginator: {
        totalEntries: null,
        pageSize: 10,
        currentPage: 1,
      },
      yearFilter: '',
    }
  },

  computed: {
    postYears() {
      let currentYear = new Date().getFullYear()
      const startYear = 2016
      const years = []
      while (currentYear >= startYear) {
        years.push(currentYear--)
      }
      return years
    },

    yearOptions() {
      const options = [
        { label: 'Alle', value: '', selected: this.yearFilter === '' },
      ]
      this.postYears.forEach((year) =>
        options.push({
          label: year,
          value: year,
          selected: String(year) === this.yearFilter,
        })
      )
      return options
    },
  },

  watch: {
    yearFilter() {
      const query = {}
      if (this.yearFilter) {
        query.year = this.yearFilter
      }
      this.$router.push({
        path: this.$route.path,
        query: { year: this.yearFilter },
      })
    },
  },

  created() {
    this.yearFilter = this.$route.query.year ? this.$route.query.year : ''
  },

  apollo: {
    posts: {
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
        this.paginator.totalEntries = data.PostItems.total
        return data.PostItems.items
      },
    },
  },

  methods: {
    previewImage(post) {
      return post.content.previewImage ? post.content.previewImage.filename : ''
    },
  },
}
</script>
