import * as path from "path";

const inputs = {
  whoMovedMyCheese: path.resolve(__dirname, "books/who-moved-my-cheese.html"),
  richDadPoorDad: path.resolve(__dirname, "books/rich-dad-poor-dad.html"),
  psychologyOfMoney: path.resolve(__dirname, "books/psychology-of-money.html"),
  predictablyIrrational: path.resolve(
    __dirname,
    "books/predictably-irrational.html"
  ),
  illustratedIntroductionToEconomics: path.resolve(
    __dirname,
    "books/illustrated-introduction-to-economics.html"
  ),
  bestWayToRest: path.resolve(__dirname, "books/best-way-to-rest.html"),
};

export const titles: Record<keyof typeof inputs, string> = {
  whoMovedMyCheese: "チーズはどこへ消えた？",
  richDadPoorDad: "金持ち父さん貧乏父さん",
  psychologyOfMoney: "サイコロジー・オブ・マネー",
  predictablyIrrational: "予想どおりに不合理",
  illustratedIntroductionToEconomics: "たった1つの図でわかる! 図解経済学入門",
  bestWayToRest: "最高の休息法",
};

export default inputs;
