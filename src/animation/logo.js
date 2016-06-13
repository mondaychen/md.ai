export default function logo(two) {
  const text = two.makeText('MD.ai', 0, 0)
  text.size = 18
  text.fill = 'rgba(255, 192, 192, 1)'
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
  })
}
