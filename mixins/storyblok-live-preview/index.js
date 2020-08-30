export default {
  mounted() {
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = Object.entries(event.story.content).reduce(
          (acc, [key, value]) => {
            if (
              typeof this.story.content[key] !== typeof event.story.content[key]
            ) {
              // The assumption is that the types are different because the relation from storybridge is NOT resolved.
              // We therefore reuse the field from the old story, so that the structure expected is still correct.
              acc[key] = this.story.content[key]
            } else {
              acc[key] = value
            }
            return acc
          },
          {}
        )
      }
    })

    this.$storybridge.on(['published', 'change'], (event) => {
      if (!event.slugChanged) {
        // Reload the page on save events (publish, save button or autosave)
        this.$router.go({
          path: this.$router.currentRoute,
          force: true,
        })
      }
    })
  },
}
