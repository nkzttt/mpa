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
  &-text {
    position: relative;
    z-index: 1;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.3;
    font-feature-settings: "palt";
    letter-spacing: 0.035em;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -2%;
    z-index: -1;
    width: 104%;
    height: 100%;
    background-color: rgba($color-secondary, $transparency-high);
    transform: translate(3px, 3px) rotate(3deg);
    @include media-tab {
      transform: translate(3px, 3px) rotate(2deg);
    }
    @include media-pc {
      transform: translate(3px, 3px) rotate(1.5deg);
    }
  }
  & + & {
    margin-top: 48px;
  }
}
</style>
