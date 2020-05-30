import * as yargs from 'yargs';


let argv = yargs.command('get', 'make a get HTTP request', {
    url: {
        alias: 'u',
        default: 'http://yargs.js.org/'
    }
}).command('put', 'make a get HTTP request', {
    url: {
        alias: 'u',
        default: 'http://yargs.js.org/'
    }
}).command('nest', 'nested command sample', {
    command: {
        alias: 'nested-option',
        default: 'nested'
    }
})
    .help()
    .argv;

console.log(argv);

