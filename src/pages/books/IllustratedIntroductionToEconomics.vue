<script setup lang="ts">
import App from "@/App.vue";
import ArticleLayout from "@/layouts/ArticleLayout.vue";
</script>

<template>
  <App>
    <ArticleLayout
      :item-info="{
        type: 'book',
        title: 'たった1つの図でわかる! 図解経済学入門',
      }"
      store-url="https://www.amazon.co.jp/%E3%81%9F%E3%81%A3%E3%81%9F1%E3%81%A4%E3%81%AE%E5%9B%B3%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B%EF%BC%81%E5%9B%B3%E8%A7%A3%E7%B5%8C%E6%B8%88%E5%AD%A6%E5%85%A5%E9%96%80-%E9%AB%99%E6%A9%8B%E6%B4%8B%E4%B8%80/dp/4866673516?hvadid=553968463916&hvpos=&hvnetw=g&hvrand=13679706326448458829&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1009408&hvtargid=pla-1641642301870&psc=1&th=1&psc=1&linkCode=li3&tag=threelines00-22&linkId=d78da59fd49d567daba536796859aca5&language=ja_JP&ref_=as_li_ss_il"
      image-url="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4866673516&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=threelines00-22&language=ja_JP"
      bought-at="2022/08/15"
      intro="需要供給曲線だけを用いて世界の経済状況や経済政策を解明していく本です。"
      :learning="[
        {
          line: '需要線と供給線の勾配は商品ごとに異なる',
          detail: [
            '生活必需品などは値上げがあっても売れる量はほとんど変わりません。需要線で見ると勾配がきつく、供給線が動いても線の交わる場所はほとんど変わりません。逆に非生活必需品（いわゆる贅沢品）は需要線の勾配がゆるいため、供給線が動くと線の交わる場所も大きく変わります。少しの値上げが売上数を大きく減らしてしまうのです。',
          ],
        },
        {
          line: '競合の多い商品の価格は需要の影響をほとんど受けない',
          detail: [
            '似たような商品を複数の企業が販売している場合、消費者はその中から一番安い商品を選び購入します。似たような商品が市場に溢れているため、供給量が需要量を上回ってしまっている状態です。こうなると選ばれなかった他の企業は最安値の商品価格に揃えるか、少しでも安くするしかありません。供給量が需要を上回ってしまっている限り、商品価格はある一定値に揃えるしかなくなるのです。',
          ],
        },
        {
          line: 'インフレには２種類ある',
          detail: [
            'インフレは需要が増えた場合と供給が減った場合に起こります。前者の需要が増えるとは、消費者側がお金を多く持っていることで起こる値上がりのため好景気と言えます。後者は消費者側のお金の量とは関係なしに値上がりが起こるため、商品が値上がり且つ売れないというとても悪い状況になりかねません。',
          ],
        },
      ]"
    />
  </App>
</template>
