// get buttons and set up functions
var sound = new Audio();
// intro
var a1 = document.getElementById('a1');
var b1 = document.getElementById('b1');
// EMA
var c1 = document.getElementById('c1');
var d1 = document.getElementById('d1');
// stress story
var e1 = document.getElementById('e1');
var f1 = document.getElementById('f1');
var g1 = document.getElementById('g1');
var h1 = document.getElementById('h1');
// exit
var j1 = document.getElementById('j1');
var k1 = document.getElementById('k1');
var m1 = document.getElementById('m1');
// responses
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');
var f4 = document.getElementById('f4');
// response bar
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var b3 = document.getElementById('b3');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');
var h4 = document.getElementById('h4');



// a1.addEventListener(‘click’, playSound(add-location)) 
function init(){
		a1.addEventListener("click", playSound(a1));
		b1.addEventListener("click", playSound(b1));
		c1.addEventListener("click", playSound(c1));
		d1.addEventListener("click", playSound(d1));
		e1.addEventListener("click", playSound(e1));
		f1.addEventListener("click", playSound(f1));
		g1.addEventListener("click", playSound(g1));
		h1.addEventListener("click", playSound(h1));
		j1.addEventListener("click", playSound(j1));
		k1.addEventListener("click", playSound(k1));
		m1.addEventListener("click", playSound(m1));
		c3.addEventListener("click", playSound(c3));
		c4.addEventListener("click", playSound(c4));
		c5.addEventListener("click", playSound(c5));
		f2.addEventListener("click", playSound(f2));
		f3.addEventListener("click", playSound(f3));
		f4.addEventListener("click", playSound(f4));
		d2.addEventListener("click", playSound(d2));
		d3.addEventListener("click", playSound(d3));
		b3.addEventListener("click", playSound(b3));
		h2.addEventListener("click", playSound(h2));
		h3.addEventListener("click", playSound(h3));
		h4.addEventListener("click", playSound(h4));
};

init();

    
// function playSound(location) {
//       sound.src = ‘audio/dragon.mp3’ // have the location of the audio file here
//       sound.play()


