import { homedir } from 'os';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { chdir } from 'node:process';
import { listContain, exitProgram, changeDirectoryUp, changeDirectory, readFile, createFile, removeFile, renameFile, copyFile, moveFile, calculateHash, compressFile, decompressFile, osFunctions } from "./modules/index.js";

const args = process.argv.slice(2);
const username = args.find(arg => arg.startsWith('--username=')).split('=')[1];
console.log(`Welcome to the File Manager, ${username}`);
chdir(homedir());
console.log(`You are currently in ${homedir()}`);

const rl = readline.createInterface({ input, output });

// Handle user input
const handleUserInput = async (input) => {
    const [command, ...args] = input.split(' ');

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
                if (args.length  > 0) {
                    await changeDirectory();
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'cat':
                if (args.length  > 0) {
                    await readFile(args[0]);
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'add':
                if (args.length  > 0) {
                    await createFile(args[0]);
                    console.log('File created.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'rm':
                if (args.length  > 0) {
                    await removeFile(args[0]);
                    console.log('File removed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'cp':
                if (args.length  > 1) {
                    await copyFile(args[0], args[1]);
                    console.log('File copied.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'rn':
                if (args.length  > 1) {
                    await renameFile(args[0], args[1]);
                    console.log('File renamed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'mv':
                if (args.length  > 1) {
                    await moveFile(args[0], args[1]);
                    console.log('File moved.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'compress':
                if (args.length  > 1) {
                    await compressFile(args[0], args[1]);
                    console.log('File compressed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'decompress':
                if (args.length  > 1) {
                    await decompressFile(args[0], args[1]);
                    console.log('File decompressed.');
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'hash':
                if (args.length  > 0) {
                    await calculateHash(args[0]);
                } else {
                    console.log(`Invalid input`);
                }
                break;
            case 'os':
                if (args.length > 0) {
                    const parameter = args[0].startsWith('--') ? args[0].slice(2) : '';
                    await osFunctions(parameter);
                } else {
                    console.log('Invalid input');
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
