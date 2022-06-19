<script setup lang="ts">
import "the-new-css-reset";

const script = document.createElement("script");
script.src = "https://www.googletagmanager.com/gtag/js?id=G-LQTPRJFXY9";
document.body.appendChild(script);
window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  window.dataLayer.push(arguments);
};
window.gtag("js", new Date());
window.gtag("config", "G-LQTPRJFXY9");
</script>

<template>
  <slot />
</template>

<style lang="scss">
body {
  font-family: Arial, sans-serif;
  font-weight: 500; // Yu Gothic hack
  background-color: $color-background;
  color: $color-text;
  font-size: 16px;
  line-height: 1;
  -webkit-text-size-adjust: 100%;
}
</style>
