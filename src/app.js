import { extend } from 'underscore'
import Backbone from 'backbone'

import getSVG from './svg'

const app = extend({}, Backbone.Events)

app.init = function(rootEl) {
  // clean up
  rootEl.innerHTML = ''

  // Make an instance of two and place it on the page.
  const two = new Two({ width: 640, height: 360 }).appendTo(rootEl)

  const face = getSVG('happy1')
  var shape = two.interpret(face).center()
  shape.translation.x = 120
  shape.translation.y = 100
  shape.scale = 0.1

  var text = two.makeText('MD.ai', 0, 0)
  text.size = 18
  text.fill = 'rgba(255, 192, 192, 1)'

  var text = two.makeGroup(text)
  text.translation.set(two.width - 30 , two.height - 30)
  text.scale = 0
  text.opacity = 0

  // Bind a function to scale and rotate the text
  // to the animation loop.
  two.on('update', function(frameCount) {
    // This code is called everytime two.update() is called.
    // Effectively 60 times per second.
    if (text.scale > 0.9999) {
      text.scale = text.opacity = text.rotation = 0
    }
    var t = (1 - text.scale) * 0.125
    text.scale += t
    text.rotation += t * 4 * Math.PI
    t = (1 - text.opacity) * 0.05
    text.opacity += t
  }).play()  // Finally, start the animation loop
}

export default app
