'use strict'

var gBallSize = 100
var gBallHeight = 100

function onBallClick(el) {
  console.log(el)
  var newBallSize = gBallSize + 50
  var newBallHeight = gBallHeight + 50
  gBallSize = newBallSize
  gBallHeight = newBallHeight
  el.style.width = newBallSize + 'px'
  el.style.height = newBallHeight + 'px'

  el.firstElementChild.innerText = gBallSize
}
