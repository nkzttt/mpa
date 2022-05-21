<script setup lang="ts">
import "the-new-css-reset";
</script>

<template>
  <slot />
</template>

<style lang="scss">
body {
  font-family: Arial, sans-serif;
  font-weight: 500; // Yu Gothic hack
  background-color: $color-background;
  color: $color-text;
  font-size: 18px;
  line-height: 1;
}
</style>
