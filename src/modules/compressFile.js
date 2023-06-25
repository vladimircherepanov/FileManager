import zlib from "zlib";
import fs from "fs";

const brotli = zlib.createBrotliCompress()

export const compressFile = async (fileName, archiveName) => {
    const r = fs.createReadStream(fileName);
    const w = fs.createWriteStream(archiveName);
    await r.pipe(brotli).pipe(w);
};