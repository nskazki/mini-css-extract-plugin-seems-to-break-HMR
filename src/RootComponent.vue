<template>
  <div>
    <p class="root-text">
      Hello from the root component!
      HMR won't apply changes made to the template or script section as long as mini-css-extract-plugin is used along with the ICSS option.
      However, changes applied to the style section will always be reflected.
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
  }
}
</script>

<style>
.root-text {
  background: lavenderblush;
}
</style>
