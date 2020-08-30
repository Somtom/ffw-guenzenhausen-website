<template>
  <div class="mt-8 flex text-gray-800 justify-end">
    <span class="mr-3">{{ entryRange }}</span>
    <button
      v-if="paginator.currentPage > 1"
      class="mx-1 bg-gray-200 w-6 rounded"
      @click="prevPage"
    >
      &lt;
    </button>
    <span>{{ paginator.currentPage }} / {{ totalPages }}</span>
    <button
      v-if="!isLastPage"
      class="mx-1 bg-gray-200 w-6 rounded"
      @click="nextPage"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
      validator(value) {
        return ['currentPage', 'totalEntries', 'pageSize'].every((item) =>
          Object.prototype.hasOwnProperty.call(value, item)
        )
      },
    },
  },

  data() {
    return {
      paginator: JSON.parse(JSON.stringify(this.value)),
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.paginator.totalEntries / this.paginator.pageSize)
    },
    entryRange() {
      const from = Math.max(
        1,
        1 + this.paginator.pageSize * (this.paginator.currentPage - 1)
      )
      const to = Math.min(
        this.paginator.pageSize * this.paginator.currentPage,
        this.paginator.totalEntries
      )
      return `${from}-${to} von ${this.paginator.totalEntries}`
    },
    isLastPage() {
      return (
        this.paginator.pageSize * this.paginator.currentPage >=
        this.paginator.totalEntries
      )
    },
  },

  watch: {
    value: {
      deep: true,
      handler() {
        this.paginator = JSON.parse(JSON.stringify(this.value))
      },
    },
  },

  methods: {
    prevPage() {
      this.paginator.currentPage--
      this.paginatorUpdated()
    },
    nextPage() {
      this.paginator.currentPage++
      this.paginatorUpdated()
    },
    paginatorUpdated() {
      this.$emit('input', this.paginator)
    },
  },
}
</script>
