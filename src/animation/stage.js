import TWEEN from 'tween.js'

import { range } from 'underscore'

import FaceElement from './elements/face'
import createTimeline from './timeline'

export default function stage(two) {
  const timeline = createTimeline(two)

  const line = range(7).map(idx => {
    const face = new FaceElement(two, 'sad')
    face.el.translation.x = 300 + idx * 55
    face.el.translation.y = 200
    two.add(face.el)
  })

  const hero = new FaceElement(two, 'happy4')
  hero.el.translation.x = -200
  hero.el.translation.y = 200
  hero.el.fill = 'blue'
  two.add(hero.el)

console.log(TWEEN.Easing)
  timeline.next(500, function() {
    new TWEEN.Tween(hero.el.translation)
      .easing(TWEEN.Easing.Cubic.Out)
      .to({
        x: 240
      }, 1000)
      .start()
  })
  .next(1000+500, function() {
    const jumpDown = new TWEEN.Tween(hero.el.translation)
      .easing(TWEEN.Easing.Circular.In)
      .to({
        y: hero.el.translation.y
      }, 230)

    new TWEEN.Tween(hero.el.translation)
      .easing(TWEEN.Easing.Circular.Out)
      .to({
        y: hero.el.translation.y - 20
      }, 230)
      .onComplete(() => jumpDown.start())
      .start()
  })
  .next(230, function() {
    hero.loadFace('sad')
    hero.el.fill = 'blue'
  })
}
