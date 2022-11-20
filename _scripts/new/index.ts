import getNotExistEntryFilePaths from "./getNotExistEntryFilePaths";
import createEntryFile from "./createEntryFile";
import createArticlesJson from "./createArticlesJson";
import createVueFiles from "./createVueFiles";

(async () => {
  try {
    const notExistEntryFilePaths = await getNotExistEntryFilePaths();
    if (notExistEntryFilePaths.length === 0) {
      process.exit(0);
    }
    await createEntryFile(notExistEntryFilePaths);
    await createArticlesJson(notExistEntryFilePaths);
    await createVueFiles(notExistEntryFilePaths);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
