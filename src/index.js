const http = require('http');
const server = require('./server/server');
const config = require('./config/config');
global.Promise = require('bluebird')

const httpServer = http.createServer(server)
httpServer.listen(3000, () => {
	console.log(`Server is running on PORT: 3000`)
})
