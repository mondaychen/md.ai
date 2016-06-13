import getSVG from 'svg'

export default class FaceElement {
  constructor(two, type) {
    this.two = two

    this.el = new Two.Group()
    this.loadFace(type)
  }

  loadFace(type) {
    this._type = type

    if (this.shape) {
      this.el.remove(this.shape)
    }

    const face = getSVG(type)
    this.shape = this.two.interpret(face).center()
    this.shape.scale = 0.1
    this.el.add(this.shape)
  }
}
