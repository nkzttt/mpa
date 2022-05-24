<script setup lang="ts">
import PageLayout from "@/layouts/PageLayout.vue";
import ThreeLines from "@/components/ThreeLines.vue";
import GhostButton from "@/components/GhostButton.vue";
import ActionButton from "@/components/ActionButton.vue";
import GothicText from "@/components/GothicText.vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const { targetElRef, scrollToTarget } = useSmoothScroll();

const props = defineProps<{
  itemInfo: { type: "book" | "movie"; title: string };
  storeUrl: string;
  imageUrl: string;
  boughtAt: string;
  intro: string;
  learning: [
    { line: string; detail: string[] },
    { line: string; detail: string[] },
    { line: string; detail: string[] }
  ];
}>();

const getType = (type: typeof props["itemInfo"]["type"]) => {
  switch (type) {
    case "movie":
      return "動画";
    case "book":
    default:
      return "書籍";
  }
};

const lines = props.learning.map(({ line }) => line) as [
  string,
  string,
  string
];
</script>

<template>
  <PageLayout>
    <div class="article">
      <p class="intro">
        {{ getType(itemInfo.type) }}「{{
          itemInfo.title
        }}」で学んだことを三行で表すと・・・
      </p>
      <div class="three-lines-container">
        <ThreeLines :lines="lines" />
      </div>
      <div class="first-action">
        <div class="first-action-button">
          <GhostButton label="もっと詳しく ↓" :on-click="scrollToTarget" />
        </div>
        <div>
          <p class="first-action-purchase">
            <a :href="storeUrl"> Amazon でチェック > </a>
          </p>
        </div>
      </div>
      <div ref="targetElRef" class="detail">
        <div class="detail-visual">
          <p class="detail-visual-image">
            <img :src="imageUrl" alt="チーズはどこへ消えた？" />
          </p>
          <p class="detail-visual-date">購入日：{{ boughtAt }}</p>
        </div>
        <div class="detail-body">
          <p class="detail-body-intro">
            {{ getType(itemInfo.type) }}「{{ itemInfo.title }}」は、{{ intro
            }}<br />
            この{{
              getType(itemInfo.type)
            }}から私が得たことは以下の３つです。<br />
          </p>
          <div>
            <div
              v-for="{ line, detail } in learning"
              :key="line"
              class="leaning"
            >
              <h2 class="leaning-heading">
                <GothicText>
                  {{ line }}
                </GothicText>
              </h2>
              <p v-for="text in detail" :key="text">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-action">
        <p class="main-action-message">いかがでしょうか？</p>
        <p class="main-action-message">
          実際に読んでみると、より深い理解や違った解釈、違った気付きが得られることと思います。
        </p>
        <div class="main-action-button">
          <ActionButton label="Amazon でチェック >" :href="storeUrl" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
.article {
  padding-bottom: 80px;
  overflow: hidden;
}
.intro {
  margin: 32px 0 64px;
  padding: 0 $size-container-padding;
  font-size: 14px;
  line-height: 1.4;
}
.three-lines-container {
  padding: 0 $size-container-padding;
  margin-bottom: 80px;
}
.first-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 144px;
  &-button {
    margin-right: 24px;
  }
  &-purchase {
    color: rgba($color-text, $transparency-low);
    font-size: 14px;
  }
}
.detail {
  padding-top: $size-container-padding;
  margin-bottom: 144px;
  &-visual {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 $size-container-padding;
    &-image {
      width: 50%;
      box-shadow: 8px 16px 0 $color-primary;
      > img {
        width: 100%;
        height: auto;
      }
    }
    &-date {
      font-size: 14px;
      color: rgba($color-background, $transparency-low);
    }
  }
  &-body {
    position: relative;
    z-index: 1;
    margin-top: -120px;
    padding: 144px $size-container-padding 40px;
    background-color: $color-primary;
    color: $color-background;
    line-height: 1.9;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 200vw;
      height: 100vmin;
      position: absolute;
      left: 0;
      z-index: -1;
      background-color: $color-primary;
    }
    &::before {
      top: 0;
      transform: translate(-50vw, -40px) rotate(3deg);
    }
    &::after {
      bottom: 0;
      transform: translate(-50vw, 40px) rotate(3deg);
    }
    &-intro {
      margin-bottom: 48px;
    }
  }
}
.leaning {
  & + & {
    margin-top: 48px;
  }
  &-heading {
    position: relative;
    padding: 12px 0;
    margin-bottom: 18px;
    font-size: 24px;
    font-feature-settings: "palt";
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: $color-background;
    }
    &::before {
      top: 0;
      left: -$size-container-padding;
    }
    &::after {
      bottom: 0;
      left: $size-container-padding;
    }
  }
}
.main-action {
  padding: 0 $size-container-padding;
  &-message {
    line-height: 1.9;
  }
  &-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
