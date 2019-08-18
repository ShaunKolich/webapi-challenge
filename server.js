const express = require('express');
// const Router = require('')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Sprint Challenge NODE.JS</h2>')
});

module.exports = server;