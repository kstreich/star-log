let express = require('express')
let bp = require('body-parser')
let server = express()
let cors = require('cors')
let port = 3000

let whitelist = ['http://localhost:8080'];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let auth = require('./server-assets/auth/routes')

server.use(auth.session)
server.use(auth.router)
server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: "Please Login to Continue"
    })
  }
  next()
})

let ship = require("./server-assets/routes/ships")
let logs = require('./server-assets/routes/logs')

server.use(ship.router)
server.use(logs.router)



server.get('*', (req, res, next) => {
  res.status(404).send({
    error: "No Matching Routes"
  })
})

server.listen(port, () => {
  console.log('Server running on port: ', port)
})