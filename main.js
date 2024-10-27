'use strict'

var gBallSize = 100

function onBallClick(el) {
  var newBallSize = gBallSize + 50
  gBallSize = newBallSize

  if (gBallSize === 400) {
    gBallSize = 100
    el.style.width = '100px'
    el.style.height = '100px'
    el.firstElementChild.innerText = gBallSize
  } else {
    el.style.width = newBallSize + 'px'
    el.style.height = newBallSize + 'px'

    el.firstElementChild.innerText = gBallSize
  }
}
