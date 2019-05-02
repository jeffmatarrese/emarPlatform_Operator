// start function and forms


//data collection and saving


// end function and reset


//get elements

var sound = new Audio() 
// intro
var a1 = document.getElementById('a1')
a1.addEventListener("click", console.log("a1 clicked"))


var b1 = document.getElementById('b1')
// EMA
var c1 = document.getElementById('c1')
var d1 = document.getElementById('d1')
// stress story
var e1 = document.getElementById('e1')
var f1 = document.getElementById('f1')
var g1 = document.getElementById('g1')
var h1 = document.getElementById('h1')
// exit
var j1 = document.getElementById('j1')
var k1 = document.getElementById('k1')
var m1 = document.getElementById('m1')
// responses
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var f2 = document.getElementById('f2')
var f3 = document.getElementById('f3')
var f4 = document.getElementById('f4')
// response bar
var d2 = document.getElementById('d2')
var d3 = document.getElementById('d3')
var b3 = document.getElementById('b3')
var h2 = document.getElementById('h2')
var h3 = document.getElementById('h3')
var h4 = document.getElementById('h4')


 // have the location of the specific button here through id
a1.addEventListener(‘click’, playSound(add-location)) 
    
function playSound(location) {
      sound.src = ‘audio/dragon.mp3’ // have the location of the audio file here
      sound.play()


