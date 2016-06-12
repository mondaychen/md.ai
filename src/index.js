import app from './app'

const rootEl = document.getElementById('root')

app.init(rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    app.init(rootEl)
  })
}
