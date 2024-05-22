const http = require('node:http');
const routeHandler = require("./routes/router.js");


const port = 3000;

const server = http.createServer(routeHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}); 