import { extend } from 'underscore'
import Backbone from 'backbone'
import Two from 'two.js'

const app = extend({}, Backbone.Events)

app.init = function (rootEl) {
  // clean up
  rootEl.innerHTML = '';
  // Make an instance of two and place it on the page.
  var two = new Two({ width: 640, height: 360 }).appendTo(rootEl)

  var circle = two.makeCircle(-70, 0, 50)
  var rect = two.makeRectangle(70, 0, 100, 100)
  circle.fill = '#FF8000'
  rect.fill = 'rgba(0, 200, 255, 0.75)'

  var group = two.makeGroup(circle, rect)
  group.translation.set(two.width / 2, two.height / 2)
  group.scale = 0
  group.noStroke()

  // Bind a function to scale and rotate the group
  // to the animation loop.
  two.bind('update', function(frameCount) {
    // This code is called everytime two.update() is called.
    // Effectively 60 times per second.
    if (group.scale > 0.9999) {
      group.scale = group.rotation = 0
    }
    var t = (1 - group.scale) * 0.125
    group.scale += t
    group.rotation += t * 4 * Math.PI
  }).play()  // Finally, start the animation loop
}

export default app
