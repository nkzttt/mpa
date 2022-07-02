<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
defineProps<{ label: string; onClick: () => void }>();
</script>

<template>
  <div class="ghost-button" @click="onClick">
    <GothicText>
      {{ label }}
    </GothicText>
    <slot name="addition" />
  </div>
</template>

<style scoped lang="scss">
.ghost-button {
  display: flex;
  align-items: center;
  border: solid 1px $color-primary;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: $color-background;
  color: $color-primary;
  cursor: pointer;
  &:hover {
    border-color: $color-sub;
    color: $color-sub;
  }
}
</style>
