<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
defineProps<{ label: string; href: string }>();
</script>

<template>
  <a :href="href" class="action-button">
    <GothicText>
      {{ label }}
    </GothicText>
    <slot name="addition" />
  </a>
</template>

<style scoped lang="scss">
.action-button {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: $color-primary;
  color: $color-background;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: $color-sub;
  }
}
</style>
