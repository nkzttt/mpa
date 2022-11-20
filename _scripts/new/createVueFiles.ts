import path from "path";
import fs from "fs/promises";
import { titles } from "../../build-inputs";
import { kebabToCamelCase, kebabToPascalCase } from "./converter";

export default async (filePaths: string[]) => {
  const templateMain = await fs.readFile(
    path.resolve(__dirname, "./templates/main.ts"),
    "utf8"
  );
  const templateComponent = await fs.readFile(
    path.resolve(__dirname, "./templates/Component.vue"),
    "utf8"
  );
  const promises = filePaths.map(async (filePath) => {
    const { dir, name } = path.parse(filePath);
    const pascalCaseName = kebabToPascalCase(name);
    const title = (titles as Record<string, string>)[kebabToCamelCase(name)];
    const typeMatched = dir.match(/.+\/(.+)$/);
    const type = typeMatched ? typeMatched[1] : "";

    let main = templateMain;
    main = main.replace(/ComponentName/g, pascalCaseName);
    await fs.writeFile(
      path.resolve(__dirname, `../../src/pages/${type}/${pascalCaseName}.ts`),
      main,
      "utf8"
    );

    let component = templateComponent;
    component = component.replace(/{{title}}/g, title);
    component = component.replace(/{{type}}/g, type.slice(0, -1));
    await fs.writeFile(
      path.resolve(__dirname, `../../src/pages/${type}/${pascalCaseName}.vue`),
      component,
      "utf8"
    );
  });
  await Promise.all(promises);
};
