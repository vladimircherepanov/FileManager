import * as path from 'path';
import { chdir, cwd } from 'node:process';

export const changeDirectoryUp = async () => {
    const currentDir = cwd();
    const parentDir = path.dirname(currentDir);

    if (currentDir === parentDir) {
        console.log('Already in the root folder.');
        return;
    }
    await  chdir("../");
    console.log(cwd());
}