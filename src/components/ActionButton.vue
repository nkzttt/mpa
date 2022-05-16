<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
const props = defineProps<{ label: string }>();
</script>

<template>
  <button class="action-button">
    <GothicText>
      {{ props.label }}
    </GothicText>
  </button>
</template>

<style scoped lang="scss">
.action-button {
  border-radius: 4px;
  padding: 8px;
  background-color: $color-primary;
  color: $color-background;
  cursor: pointer;
  &:hover {
    background-color: $color-sub;
  }
}
</style>
