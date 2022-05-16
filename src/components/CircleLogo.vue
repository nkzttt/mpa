<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 50 });
</script>

<template>
  <div class="circle-logo" :style="{ width: `${size}px`, height: `${size}px` }">
    <img src="/logo.png" />
  </div>
</template>

<style scoped lang="scss">
.circle-logo {
  background-color: $color-background;
  border-radius: 50%;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: auto;
    height: 120%;
    transform: translate(7%, -6%) rotate(-45deg);
  }
}
</style>
