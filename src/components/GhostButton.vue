<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
const props = defineProps<{ label: string }>();
</script>

<template>
  <button class="ghost-button">
    <GothicText>
      {{ props.label }}
    </GothicText>
  </button>
</template>

<style scoped lang="scss">
.ghost-button {
  border: solid 1px $color-primary;
  border-radius: 4px;
  padding: 12px 16px;
  background-color: $color-background;
  color: $color-primary;
  cursor: pointer;
  &:hover {
    border-color: $color-sub;
    color: $color-sub;
  }
}
</style>
