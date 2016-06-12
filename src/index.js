import app from './app'

const rootEl = document.getElementById('root')

app.init(rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    require('./app').default.init(rootEl)
  })
}
