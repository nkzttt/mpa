<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
const props = defineProps<{ lines: [string, string, string] }>();
</script>

<template>
  <div class="three-lines">
    <div v-for="line in props.lines" :key="line" class="line">
      <p class="line-text">
        <GothicText>{{ line }}</GothicText>
      </p>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.three-lines {
}
.line {
  position: relative;
  z-index: 1;
  padding-bottom: 64px;
  &:last-child {
    padding-bottom: 0;
  }
  &-text {
    position: relative;
    z-index: 1;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.3;
    font-feature-settings: "palt";
    letter-spacing: 0.035em;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: $color-secondary;
  }
  &::before {
    transform: rotate(30deg);
  }
  &::after {
    transform: rotate(-30deg);
  }
  &:last-child {
    &::before,
    &::after {
      content: none;
    }
  }
}
</style>
