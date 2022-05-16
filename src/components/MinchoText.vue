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
  <Component :is="asBlock ? 'div' : 'span'" class="mincho-text">
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.mincho-text {
  font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN",
    "Yu Mincho", "MS PMincho", serif;
}
</style>
