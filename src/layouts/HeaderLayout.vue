<script setup lang="ts">
import GothicText from "@/components/GothicText.vue";
</script>

<template>
  <div class="header-layout">
    <div class="header-logo">
      <div class="material-icons-outlined header-logo-icon">clear_all</div>
    </div>
    <h1 class="header-title">
      <GothicText
        ><span class="header-title-invisible">三</span>行で教えて！</GothicText
      >
    </h1>
  </div>
</template>

<style scoped lang="scss">
.header-layout {
  display: flex;
  align-items: flex-end;
  padding: 12px $size-container-padding;
  background-color: $color-secondary;
}
.header-logo {
  height: 24px;
  margin-left: -4px;
  margin-right: -1px;
  &-icon {
    color: $color-background;
    font-size: 40px;
    line-height: 24px;
  }
}
.header-title {
  margin-right: 8px;
  color: $color-background;
  font-size: 14px;
  transform: translateY(-2px);
  &-invisible {
    display: inline-block;
    width: 0;
    overflow: hidden;
  }
}
</style>
