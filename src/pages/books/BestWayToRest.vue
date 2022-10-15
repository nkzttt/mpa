<script setup lang="ts">
import App from "@/App.vue";
import ArticleLayout from "@/layouts/ArticleLayout.vue";
</script>

<template>
  <App>
    <ArticleLayout
      :item-info="{
        type: 'book',
        title: '最高の休息法',
      }"
      store-url="https://www.amazon.co.jp/%E4%B8%96%E7%95%8C%E3%81%AE%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%88%E3%81%8C%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B-%E6%9C%80%E9%AB%98%E3%81%AE%E4%BC%91%E6%81%AF%E6%B3%95-%E4%B9%85%E8%B3%80%E8%B0%B7-%E4%BA%AE-ebook/dp/B01J2ZLLN8?_encoding=UTF8&qid=&sr=&linkCode=li3&tag=threelines00-22&linkId=58392f847b9584b85d16f6430d05e925&language=ja_JP&ref_=as_li_ss_il"
      image-url="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01J2ZLLN8&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=threelines00-22&language=ja_JP"
      bought-at="2022/09/19"
      intro="肉体の疲労とは別の脳の疲労に焦点を当て、様々な種類の疲労や悩みに対し、マインドフルネスなどの様々な瞑想で解決していく本です。"
      :learning="[
        {
          line: '何も考えていなくても脳は疲れていく',
          detail: [
            '脳は意識的な活動をしていない、ぼけっとしているときにも働いています。これを DMN ( Default Mode Network ) と呼びます。この DMN が脳エネルギーの６割から８割を消費していると言われています。 DMN は心がさまよっている時に働くとされています。気付くと色々なことを考えてしまっているいわゆる雑念です。雑念が脳を疲れさせてしまいます。',
          ],
        },
        {
          line: '「いまここ」とは過去や未来を切り離すこと',
          detail: [
            'マインドフルネスでよくきく「いまここ」とは、言い換えると過去や未来を切り離すことです。',
            '心の疲れは過去の後悔や未来への不安からやってきます。これが DMN と組み合わさってしまうと脳がネガティブに支配され、常に疲れた状態になってしまいます。マインドフルネスで過去や未来を切り離し、意識を「いまここ」に戻します。世界をありのまま、新鮮なものとして捉え直し、子供の頃のようにこの瞬間を楽しみましょう。',
          ],
        },
        {
          line: '自動操縦モードのときの心の在処に注意',
          detail: [
            '食事や歯磨き、家事や車の運転など、人は意識せずに自動操縦で行っている行為がたくさんあります。このとき、心の在処に注意が必要です。心が過去や未来にいってしまっていたら、いまここに戻します。咀嚼の数を数える、ブラッシングの数を数えるなど、単純なラベリングが有効です。',
          ],
        },
      ]"
    />
  </App>
</template>
