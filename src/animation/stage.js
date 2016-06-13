import TWEEN from 'tween.js'

import FaceElement from './elements/face'
import createTimeline from './timeline'

export default function stage(two) {
  const timeline = createTimeline(two)

  const face = new FaceElement(two, 'happy4')
  face.el.translation.x = 120
  face.el.translation.y = 100
  two.add(face.el)

  const mainFaceTween = new TWEEN.Tween(face.el.translation)
    .easing(TWEEN.Easing.Cubic.Out)
    .to({
      x: 240
    }, 750)
    .start()

  timeline.on(3000, function() {
    face.loadFace('crying')
  })
}
