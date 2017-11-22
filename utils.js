const FS = require('fs');

function sendJSON(response, object) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(object))
}

function sendHTML(response, mainHTML) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(`
    <! doctype html>
    <html>
    <head>
      <link href="/assets/main.css" rel="stylesheet">
    </head>
      <body>
        ${mainHTML}
      </body>
    </html>`
  )
}

function pageError(response, object) {
  response.writeHead(404, {
    'Content-Type': 'application/json'
  })
  response.end(JSON.stringify(object))
}

function sendImage(response, image) {
  let img = FS.readFileSync(image);
  response.writeHead(200, {
    'Content-Type': 'image/gif'
  });
  response.end(img);
}

module.exports = {
  sendJSON,
  sendHTML,
  pageError,
  sendImage
}