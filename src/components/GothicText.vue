<script setup lang="ts">
withDefaults(
  defineProps<{
    asBlock?: boolean;
  }>(),
  {
    asBlock: false,
  }
);
</script>

<template>
  <Component :is="asBlock ? 'div' : 'span'" class="gothic-text">
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.gothic-text {
  font-family: "Helvetica Neue", "Helvetica", YuGothic,
    "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
}
</style>
