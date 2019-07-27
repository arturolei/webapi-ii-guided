const express = require('express');

const Hubs = require('./hubs/hubs-model.js');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use('/api/hubs',hubsRouter);
//server.use('api/messages',messagesRouter)---> But messages live in hubs
//server.use('api/users',usersRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});




// add an endpoint for adding new message to a hub


module.exports = server;