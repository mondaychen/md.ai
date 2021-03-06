import { extend } from 'underscore'
import Backbone from 'backbone'
import TWEEN from 'tween.js'

import playLogo from './animation/logo'
import playStage from './animation/stage'

const app = extend({}, Backbone.Events)

app.init = function(rootEl) {

  // Make an instance of two and place it on the page.
  const two = new Two({ width: 640, height: 360 }).appendTo(rootEl)

  playLogo(two)
  playStage(two)

  //start the animation loop
  two.on('update', function() {
    TWEEN.update()
  }).play()

  this.once('clear', () => {
    // clean up
    two.pause()
    two.clear()
    two.off()
    rootEl.innerHTML = ''
  })
}

app.clear = function() {
  this.trigger('clear')
}

export default app
