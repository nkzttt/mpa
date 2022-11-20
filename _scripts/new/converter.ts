const clearAndUpper = (text: string) => text.replace(/-/, "").toUpperCase();
export const kebabToCamelCase = (text: string) =>
  text.replace(/-\w/g, clearAndUpper);
export const kebabToPascalCase = (text: string) =>
  text.replace(/(^\w|-\w)/g, clearAndUpper);
