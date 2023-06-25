import fs from "fs";
import * as path from "path";
import { cwd } from 'node:process';


export const listContain = () => {
    const array = [];
    fs.readdir(cwd(), (err, files) => { // here is wrong
        files.forEach((file, index) => {
            const filePath = path.join(cwd(), file);
            const isDirectory = fs.lstatSync(filePath).isDirectory();
            array.push( { name: file, type: isDirectory ? "directory" : "file"  } );
        });
        array.sort((a, b) => {
            if (a.type === "directory" && b.type !== "directory") {
                return -1; // Directory comes before file
            } else if (a.type !== "directory" && b.type === "directory") {
                return 1;
            } else {
                return 0;
            }
        });
        console.log('┌───────┬─────────────────────────────────────────────────────────────┬────────────────────────┐');
        console.log('│ \x1b[1mIndex\x1b[0m |  \x1b[1mName\x1b[0m                                                       │ \x1b[1mType\x1b[0m                   │');
        console.log('├───────┼─────────────────────────────────────────────────────────────┼────────────────────────┤');
        let a = -1;
        for (const item of array) {
            a++;
            const index = a.toString().padEnd(4);
            const name = item.name.padEnd(19);
            const type = item.type.padEnd(9);
            console.log(`│ ${index}  │ \x1b[32m${name}\x1b[0m                                         │ \x1b[32m${type}\x1b[0m              │`);
        }
        console.log('└───────┴─────────────────────────────────────────────────────────────┴────────────────────────┘');

    });
};