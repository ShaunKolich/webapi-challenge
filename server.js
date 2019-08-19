
const express = require('express');

const Action = require('./data/hubs/action')

// const Router = require('')

const server = express();

server.use(express.json());

server.use('/db/action', Action);

server.get('/', (req, res) => {
    res.send('<h2>Sprint Challenge NODE.JS</h2>')
});

module.exports = server;