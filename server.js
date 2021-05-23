const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('generals.json');
const middlewares = json.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);