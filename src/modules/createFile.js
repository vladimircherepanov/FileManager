import fs from "fs";

export const createFile = async (fileName) => {
    await fs.promises.writeFile(fileName, "");
};