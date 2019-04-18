
var ssx = 640, ssy = 640;
var time = 0;
var gameState = 'menu';

var clickToStart = true;
//var words = "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. A single lap should be completed each time you hear this sound. Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";
// var words = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.";
var words = "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more di";
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
var level = 1;
var totalMoney = 0;
// just for 2nd level
var songStartTime = 0;
var hitTimes = [];
var showEnd = false;
var endTime;
var endNumPlayed = 0;

var gfx = {};
var sfx = {};
var fonts = {};

function preload() {
  gfx.piano1 = loadImage('gfx/piano1.png');
  gfx.cloud = loadImage('gfx/cloud.png');
  gfx.hatScreen = loadImage('gfx/hatScreen.png');
  gfx.piano2 = loadImage('gfx/piano2.png');
  gfx.endScreen = loadImage('gfx/endScreen.png');
  gfx.noteSheet = loadImage('gfx/noteSheet.png');
  notes.preloadAudio();
  fonts.retroComputer = loadFont('fonts/retro_computer.ttf');
}

function setup() {
  let canvas = createCanvas(ssx, ssy);
  canvas.parent('sketch');
  $('canvas').bind('contextmenu', function(e) {
    return false;
  });
  $('canvas').bind('mousedown', function(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  });
  strokeJoin(ROUND);
  noStroke();
  textFont(fonts.retroComputer);
}

function update() {
  let dt = min(1/frameRate(), 1/4);
  time += dt;
  document.body.style.cursor = 'default';
  if (maxSongTime !== 0) {
    songTime = min(songTime + dt, maxSongTime + maxSecondsOff);
  }
  if (showEnd) {
    if (endNumPlayed < hitTimes.length && time - endTime > hitTimes[endNumPlayed]) {
      let charNotes = songs.ruins.notes[endNumPlayed % songs.ruins.notes.length];
      notes.play(charNotes);
      let a = PI/2 + random(-PI/8, PI/8);
      noteEffects.new({x: 180, y: 240, xv: cos(a)*200, yv: -sin(a)*200});
      endNumPlayed++;
    }
  }
  noteEffects.update(dt);
}

function mousePressed() {
  if (clickToStart) {
    clickToStart = false;
    notes.loadAudio();
  }
}

function keyPressed() {
  if (showEnd) {
    if (keyCode === 32) { // space
      showEnd = false;
      totalMoney = 0;
      hitTimes = [];
      endNumPlayed = 0;
    }
  } else {
    if (numTyped === words.length) {
      if (keyCode === 32) { // space
        let acc;
        if (numHit + numLate + numWrong === 0) {
          acc = 100;
        } else {
          acc = numHit/(numHit + numLate + numWrong)*100;
        }
        let s = 'Accuracy: ' + acc.toFixed(2) + '%';
        if (floor((time - finishTime)*12) >= s.length) {
          totalMoney += floor(pow(acc/100, 4)*180) + 20;
          numTyped = 0;
          songTime = 0;
          maxSongTime = 0;
          noteScores = {};
          numHit = 0;
          numLate = 0;
          numWrong = 0;
          lastNotes = [];
          opacity = 0;
          level = level % 2 + 1;
          switch (level) {
            default:
            case 1:
              words = "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more di";
              songs.ruins.bpm = 138*0.5;
              // completed level 2 -> go to end before loop
              showEnd = true;
              endTime = time;
              break;
            case 2:
              //words = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway becaus";
              words = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings ";
              songs.ruins.bpm = 138;
              break;
          }
        }
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
          if (level === 2) {
            if (numTyped === 1) {
              songStartTime = time - 0.5;
            }
            hitTimes.push(time - songStartTime);
          }
          if (numTyped === words.length) {
            finishTime = time;
          }
        } else {
          for (let i=0; i < 3; i++) {
            charNotes.push(random(['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5']));
          }
          numWrong++;
        }
        notes.play(charNotes);
        lastNotes = charNotes;
      }
    }
  }
}

function draw() {
  update();
  switch (level) {
    default:
    case 1:
      background(99, 155, 255);
      image(gfx.cloud, (time*1000 / 14) % 320, 0);
      image(gfx.piano1, 0, 0);
      fill(200, 100, 100, 200);
      for (let note_i in lastNotes) {
        let note = lastNotes[note_i]
        if (k1NotePolys[note]) {
          beginShape();
          for (let i in k1NotePolys[note]) {
            let v = k1NotePolys[note][i];
            vertex(v.x, v.y);
          }
          endShape(CLOSE);
        }
      }
      break;
    case 2:
      image(gfx.piano2, 0, 0);
      fill(200, 100, 100, 200);
      for (let note_i in lastNotes) {
        let note = lastNotes[note_i]
        if (k2NotePolys[note]) {
          beginShape();
          for (let i in k2NotePolys[note]) {
            let v = k2NotePolys[note][i];
            vertex(v.x, v.y);
          }
          endShape(CLOSE);
        }
      }
      break;
  }

  if (clickToStart) {
    fill(0, 64);
    rect(0, 0, ssx, ssy);
    fill(74, 108, 111, 224);
    rect(0, ssy*2/5, ssx, ssy/5);
    fill(0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text('Click to start', ssx/2, ssy/2 - 10);
  } else {
    if (showEnd) {
      image(gfx.endScreen, 0, 0);
      textAlign(LEFT, CENTER);
      textSize(36);
      fill(106, 190, 48);
      text('$', 390, 380);
      fill(80, 140, 36);
      text(totalMoney, 390 + 40, 380);
      textAlign(CENTER, CENTER);
      textSize(30);
      let greyVal = 192 + sin(time)*64;
      fill(greyVal);
      text('Press space to play again', 320, 560);
      noteEffects.draw();
    } else {
      fill(74, 108, 111, 224);
      let barY = 130;
      rect(0, barY - 60, ssx, 120);
      rect(ssx/2 - 230, ssy*3/4 - 30, 460, 60);
      fill(160);
      rect(ssx/2 - 6, barY - 52, 12, 104);
      let w = maxSecondsOff*pixelsPerSecond*2;
      rect(ssx/2 - w/2, barY - 40, w, 80);
      fill(74, 108, 111);
      rect(ssx/2 - 6, barY - 28, 12, 56);
      ellipse(ssx/2, barY, 20, 20);
      let barTime = 0;
      for (let i=0; i < words.length; i++) {
        let x = round((barTime - songTime)*pixelsPerSecond);
        fill(0);
        rect(ssx/2 - 4 + x, barY - 26, 8, 52);
        ellipse(ssx/2 + x, barY, 16, 16);
        if (noteScores[i] === 'hit') {
          fill(64, 196, 64);
        } else if (noteScores[i] === 'late') {
          fill(196, 64, 64);
        }
        rect(ssx/2 - 2 + x, barY - 24, 4, 48);
        ellipse(ssx/2 + x, barY, 12, 12);
        barTime += songs.ruins.durations[i % songs.ruins.durations.length]*60/songs.ruins.bpm;
      }
      fill(192);
      let textY = 220;
      rect(ssx/2, textY - 30, ssx/2, 60);
      fill(160);
      textSize(36);
      rect(ssx/2, textY - 30, textWidth(words.charAt(numTyped)), 60);
      fill(0);
      textAlign(LEFT, CENTER);
      text(words.substring(numTyped), ssx/2, textY);
      textSize(36);
      textAlign(CENTER, CENTER);
      let acc;
      if (numHit + numLate + numWrong === 0) {
        acc = 100;
      } else {
        acc = numHit/(numHit + numLate + numWrong)*100;
      }
      text('Accuracy: ' + acc.toFixed(2) + '%', ssx/2, ssy*3/4);
      fill(35, 57, 91);
      switch (level) {
        default:
        case 1:
          text('0.5x', ssx*9/10, ssy/35);
          break;
        case 2:
          text('1x', ssx*9/10, ssy/35);
          break;
      }
      fill(77, 43, 37, 224);
      rect(0, 0, 150, 50);
      textAlign(LEFT, CENTER);
      fill(106, 190, 48);
      text('$', ssx/70, ssy/35);
      fill(80, 140, 36);
      text(totalMoney, ssx/70 + 40, ssy/35);
      
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
        textSize(40);
        let s = 'Accuracy: ' + acc.toFixed(2) + '%';
        s = s.substring(0, floor((time - finishTime)*12));
        text(s, 320, 120);
        let greyVal = 192 + sin(time)*64;
        fill(greyVal);
        text('Press spacebar', 320, 560);
        textAlign(LEFT, CENTER);
        fill(106, 190, 48);
        text('$', 300, 210);
        fill(80, 140, 36);
        text(floor(pow(acc/100, 4)*180) + 20, 340, 210);
      }
    }
  }
}