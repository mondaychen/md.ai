import getSVG from '../svg'
import createTimeline from './timeline'

export default function stage(two) {
  const timeline = createTimeline(two)
  timeline.on(5.5, function() {
    const face = getSVG('happy1')
    var shape = two.interpret(face).center()
    shape.translation.x = 120
    shape.translation.y = 100
    shape.scale = 0.1
  })
}
