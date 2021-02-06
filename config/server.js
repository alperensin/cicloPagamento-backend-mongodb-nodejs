const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`🔥 BackEnd is running on: http://localhost:${port}`);
}); 

// server.use((req, res, next) => {
//   console.log('✔️ Funcionou!!');
//   res.send('✔️ Funcionou!!');
// })

module.exports = server;