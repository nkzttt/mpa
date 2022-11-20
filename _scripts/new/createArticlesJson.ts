import path from "path";
import fs from "fs/promises";
import { titles } from "../../build-inputs";
import { kebabToCamelCase } from "./converter";

const existArticlesJsonPath = path.resolve(
  __dirname,
  "../../src/articles.json"
);

export default async (filePaths: string[]) => {
  const articlesJson: Record<string, string>[] = JSON.parse(
    await fs.readFile(existArticlesJsonPath, "utf8")
  );
  filePaths.forEach((filePath) => {
    const { dir, base, name } = path.parse(filePath);
    const typeMatched = dir.match(/.+\/(.+)$/);
    const type = typeMatched ? typeMatched[1] : "";
    articlesJson.push({
      file: `${type}/${base}`,
      title: (titles as Record<string, string>)[kebabToCamelCase(name)],
    });
  });
  await fs.writeFile(
    existArticlesJsonPath,
    JSON.stringify(articlesJson),
    "utf8"
  );
};
