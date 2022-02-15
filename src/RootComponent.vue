<template>
  <div>
    <p class="root-text">
      Hello from the root component!
      HMR won't apply changes made to the template or styles as long as mini-css-extract-plugin is used.
      The only way to see updated is to manually reload the page.
    </p>
    <p class="root-text">
      {{ dynamicText }}
    </p>
    <hr />
    <child-component />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      dynamicText: 'Changes made to the script will be ignored too.'
    }
  }
}
</script>

<style>
.root-text {
  background: lavenderblush;
}
</style>
