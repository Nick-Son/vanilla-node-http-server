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
  let img = FS.readFileSync('./assets/example.gif');
  response.writeHead(200, {
    'Content-Type': 'image/gif'
  });
  response.end(img, image);
}

module.exports = {
  sendJSON,
  sendHTML,
  pageError,
  sendImage
}