<script setup lang="ts">
import App from "@/App.vue";
import ArticleLayout from "@/layouts/ArticleLayout.vue";
</script>

<template>
  <App>
    <ArticleLayout
      :item-info="{ type: 'book', title: 'サイコロジー・オブ・マネー' }"
      store-url="https://www.amazon.co.jp/%E3%82%B5%E3%82%A4%E3%82%B3%E3%83%AD%E3%82%B8%E3%83%BC%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%9E%E3%83%8D%E3%83%BC%E2%80%95%E2%80%95%E4%B8%80%E7%94%9F%E3%81%8A%E9%87%91%E3%81%AB%E5%9B%B0%E3%82%89%E3%81%AA%E3%81%84%E3%80%8C%E5%AF%8C%E3%80%8D%E3%81%AE%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%82%BB%E3%83%83%E3%83%88-%E3%83%A2%E3%83%BC%E3%82%AC%E3%83%B3%E3%83%BB%E3%83%8F%E3%82%A6%E3%82%BB%E3%83%AB-ebook/dp/B09HQNXPT3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1JF02OETYJHA&keywords=%E3%82%B5%E3%82%A4%E3%82%B3%E3%83%AD%E3%82%B8%E3%83%BC&qid=1656734440&s=books&sprefix=%E3%82%B5%E3%82%A4%E3%82%B3%E3%83%AD%E3%82%B8%E3%83%BC%2Cstripbooks%2C185&sr=1-1&linkCode=li3&tag=threelines00-22&linkId=731b0c73fb1dba442aea634a014c7138&language=ja_JP&ref_=as_li_ss_il"
      image-url="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HQNXPT3&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=threelines00-22&language=ja_JP"
      bought-at="2022/06/18"
      intro="お金について考える機会をくれる書籍です。お金が私たちに与えてくれるものは何か？なぜ貯蓄が必要なのか？どれくらいお金が必要なのか？といったことを改めて考える機会をくれます。"
      :learning="[
        {
          line: '未来には到底予測できないことが起こる',
          detail: [
            '過去に起きた大きな出来事、たとえば携帯電話やスマートフォンの登場、インターネットや SNS の普及、大震災の発生や新型コロナウィルスの蔓延など、良いことも悪いことも私たちが考えもしなかったことがたくさん起きてきました。同じように、未来には良いことも悪いことも含めて、今の私たちには到底予測できないことが起こるでしょう。それなら１つ１つの物事に対して過度に期待したり不安になったりする必要はありません。そのときに自分が納得できる行動をすれば良いのです。',
          ],
        },
        {
          line: '私たちの見る「成功」の大部分はテールイベント',
          detail: [
            '私たちが目にしている成功事例はほとんどがテールイベント、つまりごく稀に起きる飛び抜けた成功です。それ以外の私たちには届かないそこそこの成功、または失敗が世の中には溢れています。失敗することの方が普通なのです。',
            '投資した大部分が失敗、または大した成果が出なくても問題ありません。どれが１つでも大きな成功になれば、それが投資全体を成功にしてくれます。',
          ],
        },
        {
          line: '福利の力を知り、今日から行動しよう',
          detail: [
            '年利5%で60歳まで投資をしたとします。40歳から始めたら2.6倍、30歳から始めたら4.3倍、20歳から始めたら7倍、早く始めれば始めるほど投資したお金は福利によって何倍にもなります。',
            'これは投資に限ったことではありません。若いうちに色々なことにチャレンジしておくことで、将来身に付くスキルも大きな差がつきます。',
            '今日よりも早い日はありません。今日から行動しましょう。',
          ],
        },
      ]"
    />
  </App>
</template>
