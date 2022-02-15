<template>
  <div>
    <p class="child-text">
      Hello from the child component!
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
      dynamicText: 'Not sure about its behavior just yet.'
    }
  }
}
</script>

<style>
.child-text {
  background: aliceblue;
}
</style>
