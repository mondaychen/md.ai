import Backbone from 'backbone'
import Heap from 'heap'

export default function createTimeline(two) {
  const heap = new Heap((l, r) => l.timestamp - r.timestamp)
  const timeline = {
    _lastTimestamp: 0,
    next(timestamp = 0, callback) {
      heap.push({
        timestamp: timestamp + this._lastTimestamp,
        callback
      })
      this._lastTimestamp += timestamp
      return timeline
    }
  }

  let currentTime = 0
  two.on('update', function(frameCount) {
    currentTime += two.timeDelta || 0
    let next
    while(next = heap.peek()) {
      if (next.timestamp < currentTime) {
        next.callback()
        heap.pop()
      } else {
        break
      }
    }
  })

  return timeline
}
