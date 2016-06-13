import FaceElement from './elements/face'
import createTimeline from './timeline'

export default function stage(two) {
  const timeline = createTimeline(two)

  const face = new FaceElement(two, 'happy1')
  face.el.translation.x = 120
  face.el.translation.y = 100
  two.add(face.el)

  timeline.on(5.5, function() {
    face.loadFace('crying')
  })
}
