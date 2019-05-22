const express = require('express')
const server = express()
const port = Number(process.env.PORT) || 3000

server.use(express.static('.'))
server.listen(port, (error) => {
  if (error) {
    throw error
  }

  console.info('serving app on port ' + port)
})