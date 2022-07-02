<script setup lang="ts">
import App from "@/App.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import GothicText from "@/components/GothicText.vue";
const base = import.meta.env.BASE_URL;

const books = [
  {
    href: `${base}books/who-moved-my-cheese.html`,
    title: "チーズはどこへ消えた?",
  },
  {
    href: `${base}books/rich-dad-poor-dad.html`,
    title: "金持ち父さん貧乏父さん",
  },
  {
    href: `${base}books/psychology-of-money.html`,
    title: "サイコロジー・オブ・マネー",
  },
];
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
            <li
              v-for="{ href, title } in books"
              :key="title"
              class="recommend-item"
            >
              <a :href="href" class="recommend-item-link">
                <div class="material-icons-outlined recommend-item-link-icon">
                  auto_stories
                </div>
                <p class="span recommend-item-link-label">
                  {{ title }}
                </p>
                <div
                  class="material-icons-outlined recommend-item-link-chevron"
                >
                  chevron_right
                </div>
              </a>
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
      &-icon {
        margin-right: 8px;
        color: rgba($color-text, $transparency-low);
        font-size: 20px;
      }
      &-label {
        flex: 1;
      }
      &-chevron {
        color: rgba($color-text, $transparency-low);
      }
    }
  }
}
</style>
