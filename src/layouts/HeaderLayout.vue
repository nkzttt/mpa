<script setup lang="ts">
import CircleLogo from "@/components/CircleLogo.vue";
import GothicText from "@/components/GothicText.vue";
</script>

<template>
  <div class="header-layout">
    <div class="header-logo">
      <CircleLogo :size="30" />
    </div>
    <h1 class="header-title">
      <GothicText
        ><span class="header-title-emphasis">三行</span>で教えて！</GothicText
      >
    </h1>
  </div>
</template>

<style scoped lang="scss">
.header-layout {
  display: flex;
  align-items: flex-end;
  padding: 12px $size-container-padding 16px;
  background-color: $color-secondary;
}
.header-logo {
  margin-right: 8px;
}
.header-title {
  margin-right: 8px;
  color: $color-background;
  font-size: 14px;
  &-emphasis {
    padding-right: 4px;
    font-size: 20px;
  }
}
</style>
