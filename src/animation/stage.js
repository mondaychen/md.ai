import getSVG from 'svg'

export default function logo(two) {
  const face = getSVG('happy1')
  var shape = two.interpret(face).center()
  shape.translation.x = 120
  shape.translation.y = 100
  shape.scale = 0.1
}
