<script setup lang="ts">
import MinchoText from "@/components/MinchoText.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
</script>

<template>
  <MinchoText as-block>
    <div class="page-layout">
      <div class="header-layout-container">
        <HeaderLayout />
      </div>
      <div class="main">
        <div class="main-slot">
          <slot />
        </div>
      </div>
      <div class="footer">TODO: footer</div>
    </div>
  </MinchoText>
</template>

<style scoped lang="scss">
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-height: 100vh;
  padding-top: 50px;
}
.header-layout-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.main {
  position: relative;
  flex: 1;
  background-color: $color-background;
  box-shadow: 0 0 12px rgba($color-primary, $transparency-medium);
  &-slot {
    position: relative;
    max-width: $size-max-width;
    margin: 0 auto;
  }
}
.footer {
  padding: 48px;
  background-color: $color-secondary;
}
</style>
