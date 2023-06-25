import fs from "fs";

export const removeFile = async (fileName) => {
    await fs.unlink(fileName,function (err) {
        if (err) throw err;
    });
};