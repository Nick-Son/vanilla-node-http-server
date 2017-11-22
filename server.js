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
  else if (path === '/about') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(`
    <! doctype html>
    <html>
      <body>
        <h1>About</h1>
        <p>Action cable</p>
      </body>
    </html>
    `)
  }
  else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end('{ "name": "Melbourne", "postcode": 3000 }')
  }
  else if (path === '/postcode/3020') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify ([
      {name: 'Albion', postcode: 3020 },
      {name: 'Sunshine', postcode: 3020 }
    ]))
  }
  else if (path === '/postcode/3020') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify ([
      {name: 'Deer Park East', postcode: 3022 },
      {name: 'Ardeer', postcode: 3022 }
    ]))
  }
  else  {
    response.writeHead(404)
    response.end('Page not found')
  }
})

//start server
server.listen(7000, (error) => {
  console.log('Server started at http://localhost:7000')
})