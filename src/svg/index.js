import happy1 from './faces/happy-1.svg'

export const SVG_LIB = {
  happy1
}

export default function getSVG(name) {
  if (!SVG_LIB[name]) {
    throw new Error('Cannot find SVG resource: ' + name)
  }
  const $svg = $(SVG_LIB[name])
  return $svg[0]
}