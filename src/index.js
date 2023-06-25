import { homedir } from 'os';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { chdir } from 'node:process';
import { listContain, exitProgram, changeDirectoryUp, changeDirectory, readFile, createFile, removeFile, renameFile, copyFile, moveFile, calculateHash, compressFile, decompressFile } from "./modules/index.js";

const args = process.argv.slice(2);
const username = args.find(arg => arg.startsWith('--username=')).split('=')[1];
console.log(`Welcome to the File Manager, ${username}`);
const userHomeDir = homedir();
chdir(userHomeDir);
console.log(`You are currently in ${userHomeDir}`);

const rl = readline.createInterface({ input, output });

// Handle user input
const handleUserInput = async (input) => {
    const [command, argument1, argument2] = input.split(' ');

    try {
        switch (command) {
            case '.exit':
                exitProgram(username);
                break;
            case 'ls':
                listContain();
                break;
            case 'up':
                await changeDirectoryUp();
                break;
            case 'cd':
                if (argument1) {
                    await changeDirectory(argument1);
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'cat':
                if (argument1) {
                    await readFile(argument1);
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'add':
                if (argument1) {
                    await createFile(argument1);
                    console.log('File created.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'rm':
                if (argument1) {
                    await removeFile(argument1);
                    console.log('File removed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'cp':
                if (argument1 && argument2) {
                    await copyFile(argument1, argument2);
                    console.log('File copied.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'rn':
                if (argument1 && argument2) {
                    await renameFile(argument1, argument2);
                    console.log('File renamed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'mv':
                if (argument1 && argument2) {
                    await moveFile(argument1, argument2);
                    console.log('File moved.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'compress':
                if (argument1 && argument2) {
                    await compressFile(argument1, argument2);
                    console.log('File compressed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'decompress':
                if (argument1 && argument2) {
                    await decompressFile(argument1, argument2);
                    console.log('File decompressed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'hash':
                if (argument1) {
                    await calculateHash(argument1);
                } else {
                    console.log(`Invalid input`);
                }
                break;
            default:
                console.log(`Invalid input`);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

// Listen for user input
rl.on('line', async (input) => {
    await handleUserInput(input);
});

// Handle exit
rl.on('SIGINT', () => {
    exitProgram(username);
});
