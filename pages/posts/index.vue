<template>
  <div>
    <PostPreview
      v-for="post in posts"
      :key="post.full_slug"
      :full-slug="post.full_slug"
      :img-src="previewImage(post)"
      :images="post.images || []"
      v-bind="post.content"
    ></PostPreview>

    <Paginator v-model="paginator" />
  </div>
</template>

<script>
import Paginator from '@/components/Paginator'
import PostPreview from '@/components/PostPreview'
import query from './query.graphql'

export default {
  components: {
    PostPreview,
    Paginator,
  },

  data() {
    return {
      posts: [],
      paginator: {
        totalEntries: null,
        pageSize: 2,
        currentPage: 1,
      },
    }
  },

  apollo: {
    posts: {
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
