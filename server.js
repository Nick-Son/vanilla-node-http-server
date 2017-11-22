
const HTTP = require('http')
const { sendJSON } = require('./utils')
const { sendHTML } = require('./utils')
const { sendImage } = require('./utils')
const { pageError } = require('./utils')

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
    sendHTML(response, `
      <h1>About</h1>
      <p>Action cable</p>
    `)
  }
  else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end('{ "name": "Melbourne", "postcode": 3000 }')
  }
  else if (path === '/postcode/3020') {
    sendJSON(response, [
        {name: 'Albion', postcode: 3020 },
        {name: 'Sunshine', postcode: 3020 }
    ])
  }
  else if (path === '/postcode/3022') {
    sendJSON(response, [
      {name: 'Deer Park East', postcode: 3022 },
      {name: 'Ardeer', postcode: 3022 }
    ])
  }
  else if (path === '/postcode/3021') {
    sendJSON(response, [
      {name: 'Kings Park', postcode: 3021 },
      {name: 'Kealba', postcode: 3021 }
    ])
  }
  else if (path === '/assets/main.css') {
    response.writeHead(200, {
      'Content-Type': 'text/css'
    })
    response.end(`
    h1 {
      text-align: center;
    }`)
  }
  else if (path === '/assets/example.gif') {
    sendImage(response, './assets/example.gif');
  }
  else  {
    pageError(response, {error: 'Page not found'})
  }
})

//start server
server.listen(7000, (error) => {
  console.log('Server started at http://localhost:7000')
})