import app from './app'

const rootEl = document.getElementById('root')

app.init(rootEl)

let lastApp = app

if (module.hot) {
  module.hot.accept('./app', () => {
    lastApp.clear()
    lastApp = require('./app').default
    lastApp.init(rootEl)
  })
}
