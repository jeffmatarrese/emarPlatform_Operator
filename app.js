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

var startSession = document.getElementById('startSession');
var endSession = document.getElementById('endSession');

a1.addEventListener('click', playSound('Hello-MyNameisEMAR.wav'), console.log("a1 playing"));
// b1.addEventListener('click', playSound('ItsNiceToMeetYou.wav'));
// c1.addEventListener('click', playSound('HowStressedRightNow.mp3'));
// d1.addEventListener('click', playSound('WhatisYourMood.wav'));
// e1.addEventListener('click', playSound('ThankYou-StressStories.wav'));
// f1.addEventListener('click', playSound('Great-ImListening.wav'));
// g1.addEventListener('click', playSound('DoYouWantToTellMeMore.wav'));
// h1.addEventListener('click', playSound('HowDidThatMakeYouFeel.wav'));
// j1.addEventListener('click', playSound('ThankYouStory.wav'));
// k1.addEventListener('click', playSound('LikedHearingHowYourDoing.wav'));
// m1.addEventListener('click', playSound('ItWasNiceMeetingYou-Bye.wav'));
// c3.addEventListener('click', playSound('ThatsGreattoHear.wav'));
// c4.addEventListener('click', playSound('ThanksforSharing.wav'));
// c5.addEventListener('click', playSound('ImSorryToHearThat.wav'));
// f2.addEventListener('click', playSound('ThatSoundsDifficult.wav'));
// f3.addEventListener('click', playSound('ThatSoundsStressful.wav'));
// f4.addEventListener('click', playSound('ICanUnderstandWhyYoureStressed.wav'));
// d2.addEventListener('click', playSound('ImSorryDidntHearThat.wav'));
// d3.addEventListener('click', playSound('CanYouRepeatThat.wav'));
// b3.addEventListener('click', playSound('ComeFindMeLater.wav'));
// h2.addEventListener('click', playSound('Yes.wav'));
// h3.addEventListener('click', playSound('I-See.wav'));
// h4.addEventListener('click', playSound('Oh.wav'));

// start stop buttons
startSession.addEventListener("click", record());
endSession.addEventListener("click", end());

    
function playSound(location) {
      sound.src = "Assets/" + location;
      sound.play();
};

function record(){
	console.log("record function happening")
	// pull data from two fields
	// start new file
	// save button clicks to file
};

function end(){
	// save file
}



