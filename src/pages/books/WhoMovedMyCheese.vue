<script setup lang="ts">
import App from "@/App.vue";
import ArticleLayout from "@/layouts/ArticleLayout.vue";
</script>

<template>
  <App>
    <ArticleLayout
      :item-info="{ type: 'book', title: 'チーズはどこへ消えた?' }"
      store-url="https://www.amazon.co.jp/%E3%83%81%E3%83%BC%E3%82%BA%E3%81%AF%E3%81%A9%E3%81%93%E3%81%B8%E6%B6%88%E3%81%88%E3%81%9F%EF%BC%9F-%E6%89%B6%E6%A1%91%E7%A4%BE%EF%BC%A2%EF%BC%AF%EF%BC%AF%EF%BC%AB%EF%BC%B3-%E3%82%B9%E3%83%9A%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%BB%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%BD%E3%83%B3-ebook/dp/B00KD2IK4S?keywords=%E3%83%81%E3%83%BC%E3%82%BA%E3%81%AF%E3%81%A9%E3%81%93%E3%81%B8%E6%B6%88%E3%81%88%E3%81%9F&qid=1653402170&sprefix=%E3%83%81%E3%83%BC%E3%82%BA%E3%81%AF%2Caps%2C183&sr=8-1&linkCode=ll1&tag=threelines00-22&linkId=536fd811ff83e46dfeecd90a01fee46c&language=ja_JP&ref_=as_li_ss_tl"
      image-url="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00KD2IK4S&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=&language=ja_JP"
      bought-at="2022/05/16"
      intro="２人の小人と２匹のねずみが自分の大切なもの = チーズとどのように向き合っていくのか？を見ていく物語です。"
      :learning="[
        {
          line: '１つに執着すると動けなくなる',
          detail: [
            'あるキャラクターは、追い求めたチーズが手に入ったとき、それさえあれば幸せだと思い込んでしまいます。そのためにチーズが突然目の前から無くなったとき、その事実を受け止めきれずにその場から動けなくなってしまいます。強く求めれば求めるほど、それが手に入ったときには無くなることを恐れ、また無くなったときにはその事実を受け入れることができないのです。',
            '私も特定の１つを強く求めてしまい、それにとらわれ、他の物事を考えられなくなることがあります。しかしそれでは一向に事態は好転しない。自分が特定の１つにとらわれていることに気付いたら、事態を好転させるための行動をとっていこうと思います。',
          ],
        },
        {
          line: '人はありもしない恐怖を勝手に作り出す',
          detail: [
            '人がなんらかの行動を起こすとき、多くの場合はそれに伴うリスクを考えるでしょう。このときに生まれる不安や恐怖は考えれば考えるほど大きくなっていきます。しかし、その不安や恐怖は必ず起こることでしょうか？むしろ起こらない可能性の方が多いのではないでしょうか？',
            'ありもしない不安や恐怖を無意味に育てるのはやめて、これからはとにかく行動をしようと思います。',
          ],
        },
        {
          line: '何かをするほうが、何もしないよりずっといい',
          detail: [
            '自分の望まない状況になってしまったとき、そこに留まり続けたほうが良い、ということはほとんどないでしょう。たとえ何か行動を起こすことに明らかなリスクがあったとしても、その先で好転する可能性があるのならリスクはとるべきです。何もしない理由を無理に探さず、難しく考えずに行動をしていこうと思います。',
          ],
        },
      ]"
    />
  </App>
</template>
