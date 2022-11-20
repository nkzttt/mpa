import fs from "fs/promises";
import buildInputs from "../../build-inputs";

export default async () => {
  const accessPromises = Object.values(buildInputs).map(
    async (entryFilePath) => {
      try {
        await fs.access(entryFilePath);
      } catch (_e) {
        return entryFilePath;
      }
    }
  );
  const accessResult = await Promise.all(accessPromises);
  return accessResult.filter((v): v is NonNullable<typeof v> => !!v);
};
