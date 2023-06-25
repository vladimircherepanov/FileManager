import fs from "fs";

export const readFile = async (filePath) => {
    const readableStream = fs.createReadStream(filePath);

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk);
    })
}