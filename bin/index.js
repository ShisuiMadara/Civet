#! /usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const cli = require('./cli.js')
const client = require('/home/shisuimadara/civet/Civet/client/client.js')
const chatStream = require('/home/shisuimadara/civet/Civet/chat/chatStream.js')
const { exit } = require('yargs')

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
    demandOption: false,
    description: 'Start a group chat'
  })
  .option('join', {
    alias: 'j',
    type: 'boolean',
    description: 'Join a chat with a specific address'
  })
  .parse()

if (process.argv.length === 2) {
  cli.showHelp()
  exit()
}

const port = process.argv.at(3)
chatStream.main(port)

if (process.argv.includes('-p')) {
//   console.log('Started server ')
  client.PTPchat()
}
if (process.argv.includes('-g')) {
  console.log('Want to start group chat')
}

if (process.argv.includes('-j')) {
  console.log('Want to join a chat')
  if (process.argv.length !== 4) {
    console.log('Enter port address')
    exit()
  }
}

// console.log(process.argv.includes('-p'))
