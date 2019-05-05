// Keep track of the session ID
var sessionID = 0;

// Keeps track of whether or not a session is started
var sessionStarted = false;

// Keep track of events during the session
var sessionEvents = [];

// Keep track of session info during a session
var sessionResearcher = "NONE";
var sessionParticipantID = "NONE";

// Starts a session
var startSessionAction = function () {

    // Check to make sure a session isn't already started
    if (sessionStarted) {
        throwError("A session has already been started. Please end the previous session before starting a new one.");
        return;
    } else {

        // Retrieve reasearcher and participant ID fields
        var researcher = document.getElementById("researcherInput").value.trim();
        var participantID = document.getElementById("participantIDInput").value.trim();

        // Next four if statements validate the given fields
        if (researcher.length < 1) {
            throwError("Please enter your researcher name.");
            return;
        }

        if (participantID.length < 1) {
            throwError("Please enter your participant ID.");
            return;
        }

        if (researcher.includes("\"") || researcher.includes("'")) {
            throwError("Your researcher name cannot have quotes in it!");
            return;
        }

        if (participantID.includes("\"") || participantID.includes("'")) {
            throwError("Your participant ID cannot have quotes in it!");
            return;
        }

        // Success! Begin a new session.
        successNotice("Your session has begun!");
        initNewSession(researcher, participantID);
        sessionStarted = true;
    }
}

// Intialize a new session
var initNewSession = function (researcher, participantID) {
    // Change BG color to indicate an active session (light green looks nice)
    document.body.style.backgroundColor = "lightgreen";

    // Set the global variables accordingly
    sessionEvents = [];
    sessionResearcher = researcher;
    sessionParticipantID = participantID;
}

// End your current session
var endSessionAction = function () {

    // Check to make sure we actually have started a session
    if (!sessionStarted) {
        throwError("A session has not been started yet.");
        return;
    } else {

        var writeText = "\"" + sessionResearcher + "\", \"" + sessionParticipantID + "\", ";

        if (sessionEvents.length > 0) {
            for (var i = 0; i < sessionEvents.length; i++) {
                if (i < sessionEvents.length - 1) {
                    writeText += "\"" + sessionEvents[i] + "\", ";
                } else {
                    writeText += "\"" + sessionEvents[i] + "\"";
                }
            }
        } else {
            writeText += "\"NO AUDIO PLAYED\"";
        }

        // TODO: append to sessions.csv
        download("session" + sessionID + ".csv", writeText);

        // Reset backround and show a success messagebox
        document.body.style.backgroundColor = "white";
        successNotice("Your session has been ended and your results have been recorded.");
    }

    sessionStarted = false;
}

// Function for easily throwing errors via messagebox/alert
var throwError = function (error) {
    alert("ERROR: " + error);
}

// Function for easily indicationg successes via messagebox/alert
var successNotice = function (notice) {
    alert("SUCCESS: " + notice);
}

// Function for playing audio files when buttons are clicked
var playAudio = function (strAudioObj) {

    // Make sure a session has been started
    if (!sessionStarted) {
        throwError("You need to start a session in order to teleoperate.");
        return;
    }

    var objSourceAudio = document.getElementById(strAudioObj);
    var objSourceAudioSource = objSourceAudio.getElementsByTagName('source')[0];
    var strSourceFile = objSourceAudioSource.src;
    var objPlayer = document.getElementById('audio_play');

    // We're only supporting .mp3 and .wav files--switch inbetween the two
    if (strSourceFile.indexOf('.wav')) {
        objPlayer.type = 'audio/wav';
    } else {
        objPlayer.type = 'audio/mpeg';
    }
    objPlayer.src = strSourceFile;
    objPlayer.load();
    objPlayer.play();

    // Push to sessionEvents for later saving
    sessionEvents.push(strAudioObj);
}

// Function for downloading a text file
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// get buttons and set up functions
// var sound = new Audio();
// // intro
// var a1 = document.getElementById('a1');
// var b1 = document.getElementById('b1');
// // EMA
// var c1 = document.getElementById('c1');
// var d1 = document.getElementById('d1');
// // stress story
// var e1 = document.getElementById('e1');
// var f1 = document.getElementById('f1');
// var g1 = document.getElementById('g1');
// var h1 = document.getElementById('h1');
// // exit
// var j1 = document.getElementById('j1');
// var k1 = document.getElementById('k1');
// var m1 = document.getElementById('m1');
// // responses
// var c3 = document.getElementById('c3');
// var c4 = document.getElementById('c4');
// var c5 = document.getElementById('c5');
// var f2 = document.getElementById('f2');
// var f3 = document.getElementById('f3');
// var f4 = document.getElementById('f4');
// // response bar
// var d2 = document.getElementById('d2');
// var d3 = document.getElementById('d3');
// var b3 = document.getElementById('b3');
// var h2 = document.getElementById('h2');
// var h3 = document.getElementById('h3');
// var h4 = document.getElementById('h4');

var startSession = document.getElementById('startSession');
var endSession = document.getElementById('endSession');

// a1.addEventListener('click', playSound('Hello-MyNameisEMAR.wav'), console.log("a1 playing"), false);
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

    
// async function playSound(location) {
// 	sound.pause();
//     sound.src = "Assets/" + location;
//     sound.play();
// };

// copied in from mdn to see if I can modify to match
// async function playVideo() {
//   try {
//     await videoElem.play();
//     playButton.className = "playing";
//   } catch(err) {
//     playButton.className = "";
//   }
// }

// OLD CODE - No longer in use
function record(){
	console.log("record function happening")
	// pull data from two fields
	// start new file
	// save button clicks to file
};

function end(){
	// save file
}
