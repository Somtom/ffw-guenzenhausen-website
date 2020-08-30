<template>
  <article>
    <VRuntimeTemplate :template="richtext" />
  </article>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'

export default {
  components: {
    VRuntimeTemplate,
  },
  props: {
    text: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    richtext() {
      return `<div> ${this.$storyapi.richTextResolver.render(this.text)}</div>`
    },
  },

  created() {
    this.$storyapi.setComponentResolver((component, blok) => {
      // Import storyblok components dynamically to avoid cirular dependencies
      const storyblokComponents = require('@/components/storyblok/storyblokComponents')
        .default
      this.$options.components = {
        ...this.$options.components,
        ...storyblokComponents,
      }
      return `<component v-bind='${JSON.stringify(blok)}'
                         :is="'${component}'"></component>`
    })
  },
}
</script>
