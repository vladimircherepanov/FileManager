import fs from "fs";

export const copyFile = async (fileName, folderPath) => {
    return new Promise((resolve, reject) => {
        fs.copyFile(fileName, folderPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};
