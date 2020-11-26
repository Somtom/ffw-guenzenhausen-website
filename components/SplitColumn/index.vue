<template>
  <div class="flex flex-wrap justify-between">
    <div><RhichText :text="getRichText(textLeft)" /></div>
    <div><RhichText :text="getRichText(textRight)" /></div>
  </div>
</template>

<script>
import RhichText from '@/components/RichText'
export default {
  components: { RhichText },

  props: {
    textLeft: {
      type: Array,
      default: () => [],
    },
    textRight: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getRichText(textArray) {
      return textArray.length ? textArray[0].text : []
    },
  },
}
</script>
