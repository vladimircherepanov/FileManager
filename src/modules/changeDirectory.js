import { chdir, cwd } from 'node:process';
import { isAbsolute, resolve } from 'path';

export const changeDirectory = async (folderName) => {
    try {
        const targetDir = isAbsolute(folderName) ? folderName : resolve(cwd(), folderName);
        await chdir(targetDir);
        console.log(cwd());
    } catch (error) {
        console.error(`Error occurred while changing directory: ${error.message}`);
    }
};

