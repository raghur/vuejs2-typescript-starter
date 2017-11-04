// Register a global custom directive called v-focus
export default {
    // When the bound element is inserted into the DOM...
    inserted: function (el, binding, arg) {
      // Focus the element
      el.focus()
    }
}
