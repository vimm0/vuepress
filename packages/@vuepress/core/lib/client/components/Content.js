export default {
  props: {
    pageKey: String,
    slotKey: {
      type: String,
      default: 'default'
    }
  },
  render (h) {
    const pageKey = this.pageKey || this.$parent.$page.key
    if (this.$hasComponent(pageKey)) {
      return h(pageKey)
    }
    return h('')
  }
}
