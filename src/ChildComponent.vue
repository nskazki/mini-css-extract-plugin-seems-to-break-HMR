<template>
  <div>
    <p class="child-text">
      Hello from the child component!
      If you change an existing line of text, a tag, or component, HMR will ignore that.
      If you add a new line, tag, or component, or remove an existing one completely, HMR will reflect that.
    </p>
    <p class="child-text">
      {{ dynamicText }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicText: 'However, it seems that changes made to the script and style sections will be always reflected.'
    }
  }
}
</script>

<style>
.child-text {
  background: aliceblue;
}
</style>
