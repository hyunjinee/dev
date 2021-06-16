const ronin = require('ronin-server')
const mocks = require('ronin-mocks')

const server = ronin.server()


server.use('/', mocks.server(server.router(), false, true))
server.start()
