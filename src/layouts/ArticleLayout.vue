<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import articles from "@/articles.json";
import PageLayout from "@/layouts/PageLayout.vue";
import ThreeLines from "@/components/ThreeLines.vue";
import GhostButton from "@/components/GhostButton.vue";
import ActionButton from "@/components/ActionButton.vue";
import GothicText from "@/components/GothicText.vue";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const base = import.meta.env.BASE_URL;
const index = articles.findIndex(({ file }) =>
  new RegExp(file).test(location.pathname)
);
const links = {
  prev: articles[index - 1] ? `${base}${articles[index - 1].file}` : null,
  next: articles[index + 1] ? `${base}${articles[index + 1].file}` : null,
};

const { y } = useWindowScroll();
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
        <div class="intro-visual">
          <div class="material-icons-outlined intro-visual-icon">
            {{ getType(itemInfo.type) }}
          </div>
        </div>
        <p class="intro-lines">
          「{{ itemInfo.title }}」で学んだことを三行で表すと・・・
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
      <ul v-if="!!links.prev || !!links.next" class="links">
        <li class="links-item">
          <a v-if="!!links.prev" :href="links.prev" class="link">
            <span class="material-icons-outlined link-icon"> arrow_back </span>
            <span class="link-label"> 前の記事 </span>
          </a>
        </li>
        <li class="links-item">
          <a v-if="!!links.next" :href="links.next" class="link">
            <span class="link-label"> 次の記事 </span>
            <span class="material-icons-outlined link-icon">
              arrow_forward
            </span>
          </a>
        </li>
      </ul>
      <div
        v-if="!!links.prev || !!links.next"
        class="fixed-links"
        :class="{ 'fixed-links-hide': y > 10 }"
      >
        <ul class="fixed-links-list">
          <li class="fixed-links-list-item">
            <a v-if="!!links.prev" :href="links.prev" class="fixed-link">
              <span class="material-icons-outlined fixed-link-icon">
                arrow_back
              </span>
            </a>
          </li>
          <li class="fixed-links-list-item">
            <a v-if="!!links.next" :href="links.next" class="fixed-link">
              <span class="material-icons-outlined fixed-link-icon">
                arrow_forward
              </span>
            </a>
          </li>
        </ul>
        <p class="fixed-links-description">前後の記事へ</p>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss">
.article {
  padding-bottom: 120px;
  overflow: hidden;
}
.intro {
  display: flex;
  align-items: center;
  margin: 16px 0;
  padding: 0 $size-container-padding;
  font-size: 14px;
  line-height: 1.4;
  &-visual {
    margin-left: -48px;
    margin-right: 16px;
    &-icon {
      color: rgba($color-secondary, $transparency-medium);
      font-size: 96px;
    }
  }
  &-lines {
    flex: 1;
  }
}
.three-lines-container {
  padding: 0 $size-container-padding;
  margin-bottom: 64px;
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
    padding-top: 144px;
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
      box-shadow: 0 -10px $color-background, 0 -17px $color-primary,
        0 -40px $color-background, 0 -43px $color-primary;
      transform: translate(-50vw, -40px) rotate(3deg);
    }
    &::after {
      bottom: 120px;
      box-shadow: 0 10px $color-background, 0 17px $color-primary,
        0 40px $color-background, 0 43px $color-primary,
        0 120px $color-background;
      transform: translate(-50vw, 40px) rotate(3deg);
    }
    &-intro {
      margin-bottom: 64px;
      padding: 0 $size-container-padding;
    }
  }
}
.leaning {
  position: relative;
  margin: 0 $size-container-padding;
  padding: 32px $size-container-padding;
  background: $color-background;
  color: $color-primary;
  & + & {
    margin-top: 32px;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    position: absolute;
    bottom: -16px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: $color-background;
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
  &-heading {
    position: relative;
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1.4;
    font-feature-settings: "palt";
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
    margin-top: 48px;
    &-icon {
      display: block;
      font-size: 32px;
      transform: translate(8px, -1px);
    }
  }
}
.links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
  padding: 0 $size-container-padding;
}
.link {
  display: flex;
  align-items: center;
  border-bottom: solid 1px $color-primary;
  &-icon {
    font-size: 20px;
    transform: translateY(-1px);
  }
  &-label {
    padding: 0 4px;
  }
}
.fixed-links {
  position: fixed;
  right: $size-container-padding;
  bottom: $size-container-padding;
  z-index: 99;
  width: 100px;
  padding-bottom: 12px;
  background-color: $color-background;
  box-shadow: 0 0 24px rgba($color-sub, $transparency-medium);
  transition: opacity 200ms linear;
  &-hide {
    opacity: 0;
    pointer-events: none;
  }
  &-list {
    display: flex;
    justify-content: space-between;
  }
  &-description {
    color: rgba($color-text, $transparency-low);
    font-size: 12px;
    text-align: center;
  }
}
.fixed-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &-icon {
    color: $color-sub;
    font-size: 32px;
  }
}
</style>
