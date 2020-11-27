<template>
  <div class="mt-12">
    <LoadingSpinner v-show="$apollo.loading" />

    <h1 class="mb-6">
      <nuxt-link to="/alerts">{{ headerAlerts }}</nuxt-link>
    </h1>
    <AlertPreview
      v-for="alert in alerts"
      :key="alert.full_slug"
      :full-slug="alert.full_slug"
      :img-src="previewImage(alert)"
      v-bind="alert.content"
    ></AlertPreview>
    <div class="flex justify-center">
      <nuxt-link class="text-blue-600" to="/posts">{{
        moreAlertsText
      }}</nuxt-link>
    </div>

    <h1 class="mb-6">
      <nuxt-link to="/alerts">{{ headerPosts }}</nuxt-link>
    </h1>
    <PostPreview
      v-for="post in posts"
      :key="post.full_slug"
      :full-slug="post.full_slug"
      :img-src="previewImage(post)"
      :images="post.images || []"
      :text="post.content.text || {}"
      v-bind="post.content"
    ></PostPreview>
    <div class="flex justify-center">
      <nuxt-link class="text-blue-600" to="/posts">{{
        morePostsText
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import AlertPreview from '@/components/AlertPreview'
import LoadingSpinner from '@/components/LoadingSpinner'
import query from './query.graphql'

export default {
  components: {
    AlertPreview,
    LoadingSpinner,
  },

  props: {
    count: { type: String, default: '3' },
    moreAlertsText: { type: String, default: 'Weitere Alarme' },
    morePostsText: { type: String, default: 'Weitere Beiträge' },
    headerAlerts: { type: String, default: 'Einsätze' },
    headerPosts: { type: String, default: 'Neuigkeiten' },
  },

  data() {
    return {
      alerts: [],
      posts: [],
    }
  },

  apollo: {
    items: {
      query,
      variables() {
        return {
          pageSize: parseInt(this.count),
        }
      },
      update(data) {
        this.alerts = data.AlertpostItems.items.map((item) => ({
          ...item,
          _type: 'alert',
        }))
        this.posts = data.PostItems.items.map((item) => ({
          ...item,
          _type: 'post',
        }))
      },
    },
  },

  computed: {
    newsItems() {
      return [...this.alerts, ...this.posts]
        .sort((a, b) => new Date(b.content.time) - new Date(a.content.time))
        .slice(0, this.count)
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
