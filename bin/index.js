#! /usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const cli = require('./cli.js')

yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  })
  .option('p', {
    alias: 'personal',
    type: 'boolean',
    demandOption: false,
    description: 'Start peer-to-peer chat'
  })
  .option('group', {
    alias: 'g',
    type: 'boolean',
    description: 'Start a group chat'
  })
  .option('join', {
    alias: 'j',
    type: 'boolean',
    description: 'Join a chat with a specific address'
  })
  .parse()

if (process.argv.p) {
  console.log('working !!')
  cli.startServer(process.argv.port)
}

console.log(yargs.process.argv.p)
