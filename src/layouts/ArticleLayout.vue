<script setup lang="ts">
import PageLayout from "@/layouts/PageLayout.vue";
import ThreeLines from "@/components/ThreeLines.vue";
import GhostButton from "@/components/GhostButton.vue";
</script>

<template>
  <PageLayout>
    <div class="article">
      <p class="intro">書籍「XXXXXXXXXX」で得たことを三行にすると・・・</p>
      <div class="three-lines-container">
        <ThreeLines
          :lines="[
            'あああああああああああああああああああああ',
            'いいいいいいいいいいいいいいいいいいいいいい',
            'ううううううううううううううううううううううううううううううううううううう',
          ]"
        />
      </div>
      <div class="first-action">
        <div class="first-action-button">
          <GhostButton label="もっと詳しく ↓" />
        </div>
        <div>
          <p class="first-action-purchase">Amazon で購入する ></p>
          <p class="first-action-purchase">楽天で購入する ></p>
        </div>
      </div>
      <p class="detail">
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
        あああああああああああああああああああああああああああああああああああああああああああああああ<br />
      </p>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
.article {
  overflow: hidden;
}
.intro {
  margin: 32px 0 64px;
  padding: 0 8px;
  font-size: 12px;
}
.three-lines-container {
  padding: 0 8px;
  margin-bottom: 80px;
}
.first-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
  &-button {
    margin-right: 24px;
  }
  &-purchase {
    color: rgba($color-text, $transparency-low);
    font-size: 14px;
    & + & {
      margin-top: 8px;
    }
  }
}
.detail {
  position: relative;
  z-index: 1;
  padding: 0 8px;
  background-color: $color-primary;
  color: $color-background;
  line-height: 1.667;
  &::before {
    content: "";
    display: block;
    width: 200vw;
    height: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: $color-primary;
    transform: translate(-50vw, -40px) rotate(3deg);
  }
}
</style>
