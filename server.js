// import { error } from 'util';

// import { request } from 'https';

const HTTP = require('http')

const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log('request received', path)
  if (path === '/') {
    response.end('Home')
  }
  else if (path === '/opensesame') {
    response.end('Secret found')
  }
  else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end('{ "name": "Melbourne", "postcode": 3000 }')
  }
  else  {
    response.end('Back at you')
  }
})

//start server
server.listen(7000, (error) => {
  console.log('Server started at http://localhost:7000')
})