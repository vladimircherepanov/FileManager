import os from "os";


export const osFunctions = async (parameter)=> {
    try {
        switch(parameter) {
            case 'EOL':
                console.log(os.EOL);
                break;
            case 'cpus':
                console.table(os.cpus());
                break;
            case 'homedir':
                console.log(os.homedir());
                break;
            case 'username':
                console.log(os.userInfo().username);
                break;
            case 'architecture':
                console.log(os.arch());
                break;

        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
    console.log();
}