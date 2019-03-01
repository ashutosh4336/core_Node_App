const http = require('http');
const url = require('url');
const fs = require =('fs');

const server = http.createServer((req, res) => {
  //get the url
  const parsedUrl = url.parse(req.url, true);

  //Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g,'');

  //send response
  res.end('Core Node App\n');

  //log the req
  console.log(`Req is Received on path: ${trimmedPath}`);

});



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`)
});
