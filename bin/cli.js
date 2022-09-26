const http = require('http')
module.exports = { startServer, showHelp }

function startServer (port) {
  const server = http.createServer(function (req, res) {
    res.writeHead(200)
  })
  server.listen(port, () => console.log(`server listening on port: ${port}`))
}

function showHelp () {
  console.log('No such command exists')
  console.log('\t Try --help')
}
