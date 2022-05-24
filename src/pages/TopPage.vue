<script setup lang="ts">
import App from "@/App.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import GothicText from "@/components/GothicText.vue";
const base = import.meta.env.BASE_URL;
</script>

<template>
  <App>
    <PageLayout>
      <div class="container">
        <p class="intro">
          当サイトは筆者が読んだ書籍や視聴した動画から学んだことを三行で紹介するサイトです。
        </p>
        <div class="recommend">
          <h2 class="recommend-heading">
            <GothicText>おすすめの紹介記事</GothicText>
          </h2>
          <ul>
            <li class="recommend-item">
              <a
                :href="`${base}books/who-moved-my-cheese.html`"
                class="recommend-item-link"
                >書籍：チーズはどこへ消えた?</a
              >
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  </App>
</template>

<style scoped lang="scss">
.container {
  padding: 40px $size-container-padding;
}
.intro {
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.4;
}
.recommend {
  &-heading {
    margin-bottom: 18px;
  }
  &-item {
    padding: 18px 0;
    border-top: solid 1px rgba($color-primary, $transparency-high);
    &:last-child {
      border-bottom: solid 1px rgba($color-primary, $transparency-high);
    }
    &-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &::after {
        content: "\203A";
        display: block;
        color: rgba($color-primary, $transparency-low);
        font-size: 24px;
      }
    }
  }
}
</style>
