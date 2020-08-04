<template>
  <div>
    <PostPreview
      v-for="post in posts"
      :key="post.full_slug"
      :full-slug="post.full_slug"
      :img-src="previewImage(post)"
      :time="post.first_published_at"
      v-bind="post.content"
    ></PostPreview>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'
import query from './query.graphql'
export default {
  components: {
    PostPreview,
  },

  data() {
    return {
      posts: [],
    }
  },

  apollo: {
    posts: {
      query,
      update(data) {
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
