import zlib from "zlib";
import fs from "fs";

const brotli = zlib.createBrotliDecompress()

export const decompressFile = async (fileName, archiveName) => {
    const r = fs.createReadStream(fileName);
    const w = fs.createWriteStream(archiveName);
    await r.pipe(brotli).pipe(w);
};