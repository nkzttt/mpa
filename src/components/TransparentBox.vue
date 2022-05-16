<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    transparency?: "high" | "medium" | "low";
    asInline?: boolean;
  }>(),
  {
    transparency: "medium",
    asInline: false,
  }
);
const opacity = (() => {
  switch (props.transparency) {
    case "high":
      return 0.2;
    case "medium":
      return 0.45;
    case "low":
    default:
      return 0.75;
  }
})();
</script>

<template>
  <Component :is="props.asInline ? 'span' : 'div'" :style="{ opacity }">
    <slot />
  </Component>
</template>
