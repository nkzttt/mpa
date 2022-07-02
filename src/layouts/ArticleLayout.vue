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
      return "movie";
    case "book":
    default:
      return "auto_stories";
  }
};
const getTypeLabel = (type: typeof props["itemInfo"]["type"]) => {
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
      <div class="intro">
        <div class="material-icons-outlined intro-icon">
          {{ getType(itemInfo.type) }}
        </div>
        <p class="intro-lines">
          {{ itemInfo.title }}で学んだことを三行で表すと・・・
        </p>
      </div>
      <div class="three-lines-container">
        <ThreeLines :lines="lines" />
      </div>
      <div class="first-action">
        <div class="first-action-button">
          <GhostButton label="もっと詳しく" :on-click="scrollToTarget">
            <template #addition>
              <span class="material-icons-outlined first-action-button-icon">
                keyboard_double_arrow_down
              </span>
            </template>
          </GhostButton>
        </div>
        <div>
          <a :href="storeUrl" class="first-action-purchase">
            <GothicText> Amazon でチェック </GothicText>
            <span class="material-icons-outlined first-action-purchase-icon">
              chevron_right
            </span>
          </a>
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
            {{ getTypeLabel(itemInfo.type) }}「{{ itemInfo.title }}」は、{{
              intro
            }}<br />
            この{{
              getTypeLabel(itemInfo.type)
            }}から私が得たことは以下の３つです。<br />
          </p>
          <div>
            <div
              v-for="{ line, detail } in learning"
              :key="line"
              class="leaning"
            >
              <h2 class="leaning-heading">
                <span class="leaning-heading-label">
                  <GothicText>
                    {{ line }}
                  </GothicText>
                </span>
              </h2>
              <p v-for="text in detail" :key="text">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-action">
        <p class="main-action-message">
          {{ getTypeLabel(itemInfo.type) }}「{{
            itemInfo.title
          }}」で学んだことでした。
        </p>
        <p class="main-action-message">
          もっと多くのことを学びたくなった、知りたくなったら書籍を手に取ってみてください。
        </p>
        <div class="main-action-button">
          <ActionButton label="Amazon でチェック" :href="storeUrl">
            <template #addition>
              <span class="material-icons-outlined main-action-button-icon">
                chevron_right
              </span>
            </template>
          </ActionButton>
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
  display: flex;
  margin: 32px 0 64px;
  padding: 0 $size-container-padding;
  font-size: 14px;
  line-height: 1.4;
  &-icon {
    margin-right: 8px;
    color: $color-secondary;
    font-size: 20px;
  }
  &-lines {
    flex: 1;
  }
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
    &-icon {
      padding-left: 4px;
      font-size: 22px;
    }
  }
  &-purchase {
    color: rgba($color-text, $transparency-low);
    font-size: 12px;
    display: flex;
    align-items: center;
    &-icon {
      font-size: 20px;
      transform: translateY(-1px);
    }
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
    letter-spacing: 0.025em;
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
      margin-bottom: 64px;
    }
  }
}
.leaning {
  & + & {
    margin-top: 64px;
  }
  &-heading {
    position: relative;
    margin-bottom: 40px;
    font-size: 24px;
    font-feature-settings: "palt";
    &-label {
      display: table;
      position: relative;
      z-index: 1;
      margin: 0 auto;
      padding: 0 8px;
      background-color: $color-primary;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -50%;
      display: block;
      width: 200%;
      height: 2px;
      background-color: $color-background;
      transform: rotate(3deg);
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
    margin-top: 64px;
    &-icon {
      display: block;
      font-size: 32px;
      transform: translate(8px, -1px);
    }
  }
}
</style>
