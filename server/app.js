require('dotenv').config();


const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = 'process.env.NODE_ENV'== 'production'
const port = process.env.PORT || 3000

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port)
  console.log('Server listening on `localhost:' + port + '`.')
}

start()


// const express = require('express')
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')
// const app = express()

// const bodyParser = require('body-parser');



// const router = express.Router();
// const routes = require('./routes/index.js');

// // Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
// config.dev = false

// async function start () {

//   app.use(bodyParser.urlencoded({
//     extended: true
//   }));
//   app.use(bodyParser.json());
//   // Init Nuxt.js
//   const nuxt = new Nuxt(config)

//   const { host, port } = nuxt.options.server

//   await nuxt.ready()
//   // Build only in dev mode
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   app.use('/api', routes(router));

//   // Give nuxt middleware to express
//   app.use(nuxt.render)

//   // Listen the server
//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
// }
// start()
