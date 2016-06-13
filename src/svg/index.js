import happy1 from './faces/happy-1.svg'
import happy4 from './faces/happy-4.svg'
import crying from './faces/crying.svg'
import sad from './faces/sad.svg'

export const SVG_LIB = {
  happy1,
  happy4,
  crying,
  sad
}

export default function getSVG(name) {
  if (!SVG_LIB[name]) {
    throw new Error('Cannot find SVG resource: ' + name)
  }
  const $svg = $(SVG_LIB[name])
  return $svg[0]
}
