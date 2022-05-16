<script setup lang="ts">
import "the-new-css-reset";
import ArticleLayout from "@/layouts/ArticleLayout.vue";
</script>

<template>
  <ArticleLayout />
</template>

<style lang="scss">
body {
  font-family: Arial, sans-serif;
  font-weight: 500; // Yu Gothic hack
  background-color: $color-background;
  color: $color-text;
  font-size: 16px;
  line-height: 1;
}
</style>
