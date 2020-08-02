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

    <div class="mt-6">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>
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
    id: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
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
  },

  computed: {
    formattedTime() {
      return new Date(this.time).toLocaleString()
    },
  },
}
</script>
