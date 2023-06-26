import fs from 'fs';
import { promisify } from 'util';

const copyFile = promisify(fs.copyFile);

export const copyFileAsync = async (fileName, folderPath) => {
    try {
        await copyFile(fileName, folderPath);
        console.log('File copied.');
    } catch (error) {
        console.error('An error occurred while copying the file:', error);
    }
};
