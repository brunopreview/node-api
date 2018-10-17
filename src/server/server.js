const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('../router/router.js');
const NODE_ENV = 'development' // Quando em produção criasse um .env e muda para producao

const server = express();

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
	server.use(morgan('combined'))
}

server.use('/api/', router)

server.use(cors());
server.use(helmet());
server.use(helmet.noCache());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use((error, req, res, next) => {
	res.status(error.status).json(error);
});

module.exports = server;