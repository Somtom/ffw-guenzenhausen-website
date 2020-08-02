<template>
  <article>
    <PostHeader :img-src="imgSrc">
      <AlertOutline />
    </PostHeader>

    <h1>{{ title }}</h1>

    <AlertInfo
      :time="time"
      :address="address"
      :message="message"
      :title="title"
    />

    <div class="mt-8" v-html="htmlText"></div>
  </article>
</template>

<script>
import AlertOutline from '@/assets/icons/notifications_none-white-48dp.svg'
import PostHeader from '@/components/PostHeader'
import AlertInfo from '@/components/AlertInfo'

export default {
  components: {
    PostHeader,
    AlertOutline,
    AlertInfo,
  },

  props: {
    time: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      default: null,
    },
    htmlText: {
      type: String,
      default: '',
    },
  },
}
</script>
