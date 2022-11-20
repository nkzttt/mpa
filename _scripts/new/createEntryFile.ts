import path from "path";
import fs from "fs/promises";
import { titles } from "../../build-inputs";
import { kebabToCamelCase, kebabToPascalCase } from "./converter";

export default async (filePaths: string[]) => {
  const template = await fs.readFile(
    path.resolve(__dirname, "./templates/entry-file.html"),
    "utf8"
  );
  const promises = filePaths.map(async (filePath) => {
    const { dir, base, name } = path.parse(filePath);
    const title = (titles as Record<string, string>)[kebabToCamelCase(name)];
    const typeMatched = dir.match(/.+\/(.+)$/);
    const type = typeMatched ? typeMatched[1] : "";
    let html = template;
    html = html.replace(/{{title}}/g, title);
    html = html.replace(/{{type}}/g, type);
    html = html.replace(/{{base}}/g, base);
    html = html.replace(/{{pascal}}/g, kebabToPascalCase(name));
    await fs.writeFile(
      path.resolve(__dirname, `../../${type}/${base}`),
      html,
      "utf8"
    );
  });
  await Promise.all(promises);
};
