import fs from "fs";
import { createHash } from "crypto";

export const calculateHash = async (fileName) => {
    await fs.readFile(fileName, (error, data)=> {
        console.log(createHash('sha256').update(data).digest('hex'))
    })
};

