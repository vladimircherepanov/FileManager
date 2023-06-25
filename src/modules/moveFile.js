import fs from "fs";
import path from "path";

export const moveFile = async (fileName, folderPath) => {
    try {
        const newFileName = path.resolve(folderPath, path.basename(fileName));
        console.log(fileName, folderPath, newFileName);
        await fs.promises.rename(fileName, newFileName);
    } catch (error) {
        console.error("An error occurred while moving the file:", error);
    }
};
