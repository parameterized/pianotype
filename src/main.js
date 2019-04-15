
var ssx = 640, ssy = 640;
var time = 0;
var gameState = 'menu';

var clickToStart = true;
//var words = 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. A single lap should be completed each time you hear this sound. Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.';
var words = 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more di';
var numTyped = 0;

var songTime = 0;
var maxSongTime = 0;
var pixelsPerSecond = 500;
var maxSecondsOff = 0.2;
var noteScores = {};
var numHit = 0;
var numLate = 0;
var numWrong = 0;
var lastNotes = [];

var opacity = 0;
var finishTime;

var gfx = {};
var sfx = {};

function preload() {
  gfx.piano1 = loadImage('gfx/piano1.png');
  gfx.cloud = loadImage('gfx/cloud.png');
  gfx.hatScreen = loadImage('gfx/hatScreen.png');
}

function setup() {
  createCanvas(ssx, ssy);
  $('canvas').bind('contextmenu', function(e) {
    return false;
  });
  strokeJoin(ROUND);
  noStroke();
}

function update() {
  let dt = min(1/frameRate(), 1/4);
  time += dt;
  if (maxSongTime !== 0) {
    songTime = min(songTime + dt, maxSongTime + maxSecondsOff);
  }
  document.body.style.cursor = 'default';
}

function mousePressed() {
  if (clickToStart) {
    clickToStart = false;
    notes.loadAudio();
  }
}

function keyPressed() {
  if (numTyped === words.length) {
    if (keyCode === 32) { // space
      numTyped = 0;
      songTime = 0;
      maxSongTime = 0;
      noteScores = {};
      numHit = 0;
      numLate = 0;
      numWrong = 0;
      lastNotes = [];
      opacity = 0;
    }
  } else {
    // shift: 16, ctrl: 17
    if (!clickToStart && !(keyCode === 16 || keyCode === 17)) {
      //console.log(keyCode);
      // comma: keyCode=188, charCode=44
      // period: keyCode=190, charCode=46
      let wordCharCode = words.toUpperCase().charCodeAt(numTyped);
      let charNotes = [];
      if (keyCode === wordCharCode
      || keyCode === 188 && wordCharCode === 44
      || keyCode === 190 && wordCharCode === 46) {
        if (songTime > maxSongTime - maxSecondsOff && songTime < maxSongTime + maxSecondsOff) {
          noteScores[numTyped] = 'hit';
          numHit++;
        } else {
          noteScores[numTyped] = 'late';
          numLate++;
        }
        charNotes = songs.ruins.notes[numTyped % songs.ruins.notes.length];
        maxSongTime += songs.ruins.durations[numTyped % songs.ruins.durations.length]*60/songs.ruins.bpm;
        numTyped++;
        if (numTyped === words.length) {
          finishTime = millis();
        }
      } else {
        for (let i=0; i < 3; i++) {
          charNotes.push(random(['A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6']));
        }
        numWrong++;
      }
      notes.play(charNotes);
      lastNotes = charNotes;
    }
  }
}

function draw() {
  update();
  background(99, 155, 255);
  image(gfx.cloud, (millis() / 14) % 320, 0);
  image(gfx.piano1, 0, 0);

  fill(200, 100, 100, 200);
  for (let note_i in lastNotes) {
    let note = lastNotes[note_i]
    if (notePolys[note]) {
      beginShape();
      for (let i in notePolys[note]) {
        let v = notePolys[note][i];
        vertex(v.x, v.y);
      }
      endShape(CLOSE);
    }
  }

  if (clickToStart) {
    fill(0, 64);
    rect(0, 0, ssx, ssy);
    fill(0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text('Click to start', ssx/2, ssy/2);
  } else {
    fill(74, 108, 111, 224);
    rect(0, ssy/4 - 60, ssx, 120);
    rect(ssx/2 - 170, ssy*3/4 - 30, 340, 60);
    fill(160);
    rect(ssx/2 - 6, ssy/4 - 52, 12, 104);
    let w = maxSecondsOff*pixelsPerSecond*2;
    rect(ssx/2 - w/2, ssy/4 - 40, w, 80);
    fill(74, 108, 111);
    rect(ssx/2 - 6, ssy/4 - 28, 12, 56);
    ellipse(ssx/2, ssy/4, 20, 20);
    let barTime = 0;
    for (let i=0; i < words.length; i++) {
      let x = round((barTime - songTime)*pixelsPerSecond);
      fill(0);
      rect(ssx/2 - 4 + x, ssy/4 - 26, 8, 52);
      ellipse(ssx/2 + x, ssy/4, 16, 16);
      if (noteScores[i] === 'hit') {
        fill(64, 196, 64);
      } else if (noteScores[i] === 'late') {
        fill(196, 64, 64);
      }
      rect(ssx/2 - 2 + x, ssy/4 - 24, 4, 48);
      ellipse(ssx/2 + x, ssy/4, 12, 12);
      barTime += songs.ruins.durations[i % songs.ruins.durations.length]*60/songs.ruins.bpm;
    }
    fill(192);
    rect(ssx/2, ssy/2 - 14, ssx/2, 28);
    fill(160);
    textSize(24);
    rect(ssx/2, ssy/2 - 14, textWidth(words.charAt(numTyped)), 28);
    fill(0);
    textAlign(LEFT, CENTER);
    text(words.substring(numTyped), ssx/2, ssy/2);
    textSize(36);
    textAlign(CENTER, CENTER);
    let acc;
    if (numHit + numLate + numWrong === 0) {
      acc = 100;
    } else {
      acc = numHit/(numHit + numLate + numWrong)*100;
    }
    text('Accuracy: ' + acc.toFixed(2) + '%', ssx/2, ssy*3/4);
    
    if (numTyped === words.length) {
      opacity = min(opacity + 13, 255);
      // avoid tinting when possible (laggy)
      if (opacity !== 255) {
        tint(255, opacity);
      }
      image(gfx.hatScreen, 0, 0);
      noTint();
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(50);
      let s = 'Accuracy: ' + acc.toFixed(2) + '%';
      s = s.substring(0, floor((millis() - finishTime)/1000*12));
      text(s, 320, 120);
      let greyVal = 192 + sin(millis()/1000)*64;
      fill(greyVal);
      text('Press Spacebar', 320, 560)
    }
  }
}