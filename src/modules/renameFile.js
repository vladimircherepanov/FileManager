import fs from "fs";

export const renameFile = async (currentFileName, newFileName) => {
    await fs.rename(currentFileName, newFileName, function (err) {
        if (err) throw err;
    });
};