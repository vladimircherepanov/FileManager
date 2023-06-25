import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });

export const exitProgram = (username) => {
    console.log(`Thank you for using File Manager,  ${username}, , goodbye!`);
    rl.close();
    process.exit();
};