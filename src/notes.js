
var notes = {};

notes.synth = false;

notes.preloadAudio = function() {
  sfx.k1 = {
    'C2': loadSound('sfx/k1/C2.wav'),
    'C#2': loadSound('sfx/k1/Cs2.wav'),
    'D2': loadSound('sfx/k1/D2.wav'),
    'D#2': loadSound('sfx/k1/Ds2.wav'),
    'E2': loadSound('sfx/k1/E2.wav'),
    'F2': loadSound('sfx/k1/F2.wav'),
    'F#2': loadSound('sfx/k1/Fs2.wav'),
    'G2': loadSound('sfx/k1/G2.wav'),
    'G#2': loadSound('sfx/k1/Gs2.wav'),
    'A2': loadSound('sfx/k1/A2.wav'),
    'A#2': loadSound('sfx/k1/As2.wav'),
    'B2': loadSound('sfx/k1/B2.wav'),
    'C3': loadSound('sfx/k1/C3.wav'),
    'C#3': loadSound('sfx/k1/Cs3.wav'),
    'D3': loadSound('sfx/k1/D3.wav'),
    'D#3': loadSound('sfx/k1/Ds3.wav'),
    'E3': loadSound('sfx/k1/E3.wav'),
    'F3': loadSound('sfx/k1/F3.wav'),
    'F#3': loadSound('sfx/k1/Fs3.wav'),
    'G3': loadSound('sfx/k1/G3.wav'),
    'G#3': loadSound('sfx/k1/Gs3.wav'),
    'A3': loadSound('sfx/k1/A3.wav'),
    'A#3': loadSound('sfx/k1/As3.wav'),
    'B3': loadSound('sfx/k1/B3.wav'),
    'C4': loadSound('sfx/k1/C4.wav'),
    'C#4': loadSound('sfx/k1/Cs4.wav'),
    'D4': loadSound('sfx/k1/D4.wav'),
    'D#4': loadSound('sfx/k1/Ds4.wav'),
    'E4': loadSound('sfx/k1/E4.wav'),
    'F4': loadSound('sfx/k1/F4.wav'),
    'F#4': loadSound('sfx/k1/Fs4.wav'),
    'G4': loadSound('sfx/k1/G4.wav'),
    'G#4': loadSound('sfx/k1/Gs4.wav'),
    'A4': loadSound('sfx/k1/A4.wav'),
    'A#4': loadSound('sfx/k1/As4.wav'),
    'B4': loadSound('sfx/k1/B4.wav'),
    'C5': loadSound('sfx/k1/C5.wav'),
    'C#5': loadSound('sfx/k1/Cs5.wav'),
    'D5': loadSound('sfx/k1/D5.wav'),
    'D#5': loadSound('sfx/k1/Ds5.wav'),
    'E5': loadSound('sfx/k1/E5.wav'),
    'F5': loadSound('sfx/k1/F5.wav'),
    'F#5': loadSound('sfx/k1/Fs5.wav'),
    'G5': loadSound('sfx/k1/G5.wav'),
    'G#5': loadSound('sfx/k1/Gs5.wav'),
    'A5': loadSound('sfx/k1/A5.wav'),
    'A#5': loadSound('sfx/k1/As5.wav'),
    'B5': loadSound('sfx/k1/B5.wav'),
    'C6': loadSound('sfx/k1/C6.wav'),
    'C#6': loadSound('sfx/k1/Cs6.wav'),
    'D6': loadSound('sfx/k1/D6.wav'),
    'D#6': loadSound('sfx/k1/Ds6.wav'),
    'E6': loadSound('sfx/k1/E6.wav'),
    'F6': loadSound('sfx/k1/F6.wav'),
    'F#6': loadSound('sfx/k1/Fs6.wav'),
    'G6': loadSound('sfx/k1/G6.wav'),
    'G#6': loadSound('sfx/k1/Gs6.wav'),
    'A6': loadSound('sfx/k1/A6.wav'),
    'A#6': loadSound('sfx/k1/As6.wav'),
    'B6': loadSound('sfx/k1/B6.wav'),
    'C7': loadSound('sfx/k1/C7.wav')
  };
  sfx.k1['Db2'] = sfx.k1['C#2'];
  sfx.k1['Eb2'] = sfx.k1['D#2'];
  sfx.k1['Gb2'] = sfx.k1['F#2'];
  sfx.k1['Ab2'] = sfx.k1['G#2'];
  sfx.k1['Bb2'] = sfx.k1['A#2'];
  sfx.k1['Db3'] = sfx.k1['C#3'];
  sfx.k1['Eb3'] = sfx.k1['D#3'];
  sfx.k1['Gb3'] = sfx.k1['F#3'];
  sfx.k1['Ab3'] = sfx.k1['G#3'];
  sfx.k1['Bb3'] = sfx.k1['A#3'];
  sfx.k1['Db4'] = sfx.k1['C#4'];
  sfx.k1['Eb4'] = sfx.k1['D#4'];
  sfx.k1['Gb4'] = sfx.k1['F#4'];
  sfx.k1['Ab4'] = sfx.k1['G#4'];
  sfx.k1['Bb4'] = sfx.k1['A#4'];
  sfx.k1['Db5'] = sfx.k1['C#5'];
  sfx.k1['Eb5'] = sfx.k1['D#5'];
  sfx.k1['Gb5'] = sfx.k1['F#5'];
  sfx.k1['Ab5'] = sfx.k1['G#5'];
  sfx.k1['Bb5'] = sfx.k1['A#5'];
  sfx.k1['Db6'] = sfx.k1['C#6'];
  sfx.k1['Eb6'] = sfx.k1['D#6'];
  sfx.k1['Gb6'] = sfx.k1['F#6'];
  sfx.k1['Ab6'] = sfx.k1['G#6'];
  sfx.k1['Bb6'] = sfx.k1['A#6'];
}

notes.loadAudio = function() {
  notes.oscillators = [];
  notes.envelopes = [];
  for (let i=0; i < 6; i++) {
    osc = new p5.SinOsc();
    env = new p5.Env();
    env.setADSR(0.001, 0.2, 0.2, 0.5);
    env.setRange(1, 0);
    env.mult(0.2);
    osc.amp(env);
    osc.start();
    notes.oscillators.push(osc);
    notes.envelopes.push(env);
  }
}

// http://pages.mtu.edu/~suits/notefreqs.html
notes.noteFreqs = {
  'C0': 16.35, 'C#0': 17.32, 'Db0': 17.32, 'D0': 18.35, 'D#0': 19.45, 'Eb0': 19.45, 'E0': 20.60, 'F0': 21.83, 'F#0': 23.12, 'Gb0': 23.12, 'G0': 24.50, 'G#0': 25.96, 'Ab0': 25.96, 'A0': 27.50, 'A#0': 29.14, 'Bb0': 29.14, 'B0': 30.87,
  'C1': 32.70, 'C#1': 34.65, 'Db1': 34.65, 'D1': 36.71, 'D#1': 38.89, 'Eb1': 38.89, 'E1': 41.20, 'F1': 43.65, 'F#1': 46.25, 'Gb1': 46.25, 'G1': 49.00, 'G#1': 51.91, 'Ab1': 51.91, 'A1': 55.00, 'A#1': 58.27, 'Bb1': 58.27, 'B1': 61.74,
  'C2': 65.41, 'C#2': 69.30, 'Db2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'Eb2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'Gb2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'Ab2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'Bb2': 116.54, 'B2': 123.47,
  'C3': 130.81, 'C#3': 138.59, 'Db3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'Eb3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'Gb3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'Ab3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'Bb3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'Db4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'Gb4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'Ab4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'Bb4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'Db5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'Eb5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'Gb5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'Ab5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'Bb5': 932.33, 'B5': 987.77,
  'C6': 1046.50, 'C#6': 1108.73, 'Db6': 1108.73, 'D6': 1174.66, 'D#6': 1244.51, 'Eb6': 1244.51, 'E6': 1318.51, 'F6': 1396.91, 'F#6': 1479.98, 'Gb6': 1479.98, 'G6': 1567.98, 'G#6': 1661.22, 'Ab6': 1661.22, 'A6': 1760.00, 'A#6': 1864.66, 'Bb6': 1864.66, 'B6': 1975.53,
  'C7': 2093.00, 'C#7': 2217.46, 'Db7': 2217.46, 'D7': 2349.32, 'D#7': 2489.02, 'Eb7': 2489.02, 'E7': 2637.02, 'F7': 2793.83, 'F#7': 2959.96, 'Gb7': 2959.96, 'G7': 3135.96, 'G#7': 3322.44, 'Ab7': 3322.44, 'A7': 3520.00, 'A#7': 3729.31, 'Bb7': 3729.31, 'B7': 3951.07,
  'C8': 4186.01, 'C#8': 4434.92, 'Db8': 4434.92, 'D8': 4698.63, 'D#8': 4978.03, 'Eb8': 4978.03, 'E8': 5274.04, 'F8': 5587.65, 'F#8': 5919.91, 'Gb8': 5919.91, 'G8': 6271.93, 'G#8': 6644.88, 'Ab8': 6644.88, 'A8': 7040.00, 'A#8': 7458.62, 'Bb8': 7458.62, 'B8': 7902.13,
};

notes.play = function(noteList) {
  for (let i=0; i < noteList.length; i++) {
    let note = noteList[i];
    if (notes.synth) {
      notes.oscillators[i].freq(notes.noteFreqs[note]);
      notes.envelopes[i].play(notes.oscillators[i], 0, 0.1);
    } else {
      if (sfx.k1[note]) {
        sfx.k1[note].play();
      }
    }
  }
}


var k1NotePolys = {
  'C3': [
    {x: 140, y: 340},
    {x: 160, y: 340},
    {x: 160, y: 360},
    {x: 165, y: 360},
    {x: 165, y: 380},
    {x: 140, y: 380}
  ],
  'C#3': [
    {x: 160, y: 340},
    {x: 170, y: 340},
    {x: 170, y: 360},
    {x: 160, y: 360}
  ],
  'D3': [
    {x: 165, y: 360},
    {x: 170, y: 360},
    {x: 170, y: 340},
    {x: 180, y: 340},
    {x: 180, y: 360},
    {x: 185, y: 360},
    {x: 185, y: 380},
    {x: 165, y: 380}
  ],
  'D#3': [
    {x: 180, y: 340},
    {x: 190, y: 340},
    {x: 190, y: 360},
    {x: 180, y: 360}
  ],
  'E3': [
    {x: 185, y: 360},
    {x: 190, y: 360},
    {x: 190, y: 340},
    {x: 205, y: 340},
    {x: 205, y: 380},
    {x: 185, y: 380}
  ],
  'F3': [
    {x: 205, y: 340},
    {x: 220, y: 340},
    {x: 220, y: 360},
    {x: 225, y: 360},
    {x: 225, y: 380},
    {x: 205, y: 380}
  ],
  'F#3': [
    {x: 220, y: 340},
    {x: 230, y: 340},
    {x: 230, y: 360},
    {x: 220, y: 360}
  ],
  'G3': [
    {x: 225, y: 360},
    {x: 230, y: 360},
    {x: 230, y: 340},
    {x: 240, y: 340},
    {x: 240, y: 360},
    {x: 245, y: 360},
    {x: 245, y: 380},
    {x: 225, y: 380}
  ],
  'G#3': [
    {x: 240, y: 340},
    {x: 250, y: 340},
    {x: 250, y: 360},
    {x: 240, y: 360}
  ],
  'A3': [
    {x: 245, y: 360},
    {x: 250, y: 360},
    {x: 250, y: 340},
    {x: 260, y: 340},
    {x: 260, y: 360},
    {x: 265, y: 360},
    {x: 265, y: 380},
    {x: 245, y: 380}
  ],
  'A#3': [
    {x: 260, y: 340},
    {x: 270, y: 340},
    {x: 270, y: 360},
    {x: 260, y: 360}
  ],
  'B3': [
    {x: 265, y: 360},
    {x: 270, y: 360},
    {x: 270, y: 340},
    {x: 285, y: 340},
    {x: 285, y: 380},
    {x: 265, y: 380}
  ],
  'C4': [
    {x: 285, y: 340},
    {x: 300, y: 340},
    {x: 300, y: 360},
    {x: 305, y: 360},
    {x: 305, y: 380},
    {x: 285, y: 380}
  ],
  'C#4': [
    {x: 300, y: 340},
    {x: 310, y: 340},
    {x: 310, y: 360},
    {x: 300, y: 360}
  ],
  'D4': [
    {x: 305, y: 360},
    {x: 310, y: 360},
    {x: 310, y: 340},
    {x: 320, y: 340},
    {x: 320, y: 360},
    {x: 325, y: 360},
    {x: 325, y: 380},
    {x: 305, y: 380}
  ],
  'D#4': [
    {x: 320, y: 340},
    {x: 330, y: 340},
    {x: 330, y: 360},
    {x: 320, y: 360}
  ],
  'E4': [
    {x: 325, y: 360},
    {x: 330, y: 360},
    {x: 330, y: 340},
    {x: 345, y: 340},
    {x: 345, y: 380},
    {x: 325, y: 380}
  ],
  'F4': [
    {x: 345, y: 340},
    {x: 360, y: 340},
    {x: 360, y: 360},
    {x: 365, y: 360},
    {x: 365, y: 380},
    {x: 345, y: 380}
  ],
  'F#4': [
    {x: 360, y: 340},
    {x: 370, y: 340},
    {x: 370, y: 360},
    {x: 360, y: 360}
  ],
  'G4': [
    {x: 365, y: 360},
    {x: 370, y: 360},
    {x: 370, y: 340},
    {x: 380, y: 340},
    {x: 380, y: 360},
    {x: 385, y: 360},
    {x: 385, y: 380},
    {x: 365, y: 380}
  ],
  'G#4': [
    {x: 380, y: 340},
    {x: 390, y: 340},
    {x: 390, y: 360},
    {x: 380, y: 360}
  ],
  'A4': [
    {x: 385, y: 360},
    {x: 390, y: 360},
    {x: 390, y: 340},
    {x: 400, y: 340},
    {x: 400, y: 360},
    {x: 405, y: 360},
    {x: 405, y: 380},
    {x: 385, y: 380}
  ],
  'A#4': [
    {x: 400, y: 340},
    {x: 410, y: 340},
    {x: 410, y: 360},
    {x: 400, y: 360}
  ],
  'B4': [
    {x: 405, y: 360},
    {x: 410, y: 360},
    {x: 410, y: 340},
    {x: 425, y: 340},
    {x: 425, y: 380},
    {x: 405, y: 380}
  ],
  'C5': [
    {x: 425, y: 340},
    {x: 440, y: 340},
    {x: 440, y: 360},
    {x: 445, y: 360},
    {x: 445, y: 380},
    {x: 425, y: 380}
  ],
  'C#5': [
    {x: 440, y: 340},
    {x: 450, y: 340},
    {x: 450, y: 360},
    {x: 440, y: 360}
  ],
  'D5': [
    {x: 445, y: 360},
    {x: 450, y: 360},
    {x: 450, y: 340},
    {x: 460, y: 340},
    {x: 460, y: 360},
    {x: 465, y: 360},
    {x: 465, y: 380},
    {x: 445, y: 380}
  ],
  'D#5': [
    {x: 460, y: 340},
    {x: 470, y: 340},
    {x: 470, y: 360},
    {x: 460, y: 360}
  ],
  'E5': [
    {x: 465, y: 360},
    {x: 470, y: 360},
    {x: 470, y: 340},
    {x: 485, y: 340},
    {x: 485, y: 380},
    {x: 465, y: 380}
  ],
  'F5': [
    {x: 485, y: 340},
    {x: 500, y: 340},
    {x: 500, y: 380},
    {x: 485, y: 380}
  ]
};
k1NotePolys['Db3'] = k1NotePolys['C#3'];
k1NotePolys['Eb3'] = k1NotePolys['D#3'];
k1NotePolys['Gb3'] = k1NotePolys['F#3'];
k1NotePolys['Ab3'] = k1NotePolys['G#3'];
k1NotePolys['Bb3'] = k1NotePolys['A#3'];
k1NotePolys['Db4'] = k1NotePolys['C#4'];
k1NotePolys['Eb4'] = k1NotePolys['D#4'];
k1NotePolys['Gb4'] = k1NotePolys['F#4'];
k1NotePolys['Ab4'] = k1NotePolys['G#4'];
k1NotePolys['Bb4'] = k1NotePolys['A#4'];
k1NotePolys['Db5'] = k1NotePolys['C#5'];
k1NotePolys['Eb5'] = k1NotePolys['D#5'];

k2NotePolys = {
  'B1': [
    {x: 60, y: 290},
    {x: 70, y: 290},
    {x: 70, y: 330},
    {x: 60, y: 330}
  ],
  'C2': [
    {x: 70, y: 290},
    {x: 80, y: 290},
    {x: 80, y: 310},
    {x: 85, y: 310},
    {x: 85, y: 330},
    {x: 70, y: 330}
  ],
  'C#2': [
    {x: 80, y: 290},
    {x: 90, y: 290},
    {x: 90, y: 310},
    {x: 80, y: 310}
  ],
  'D2': [
    {x: 85, y: 310},
    {x: 90, y: 310},
    {x: 90, y: 290},
    {x: 100, y: 290},
    {x: 100, y: 310},
    {x: 105, y: 310},
    {x: 105, y: 330},
    {x: 85, y: 330}
  ],
  'D#2': [
    {x: 100, y: 290},
    {x: 110, y: 290},
    {x: 110, y: 310},
    {x: 100, y: 310}
  ],
  'E2': [
    {x: 105, y: 310},
    {x: 110, y: 310},
    {x: 110, y: 290},
    {x: 125, y: 290},
    {x: 125, y: 330},
    {x: 105, y: 330}
  ],
  'F2': [
    {x: 125, y: 290},
    {x: 140, y: 290},
    {x: 140, y: 310},
    {x: 145, y: 310},
    {x: 145, y: 330},
    {x: 125, y: 330}
  ],
  'F#2': [
    {x: 140, y: 290},
    {x: 150, y: 290},
    {x: 150, y: 310},
    {x: 140, y: 310}
  ],
  'G2': [
    {x: 145, y: 310},
    {x: 150, y: 310},
    {x: 150, y: 290},
    {x: 160, y: 290},
    {x: 160, y: 310},
    {x: 165, y: 310},
    {x: 165, y: 330},
    {x: 145, y: 330}
  ],
  'G#2': [
    {x: 160, y: 290},
    {x: 170, y: 290},
    {x: 170, y: 310},
    {x: 160, y: 310}
  ],
  'A2': [
    {x: 165, y: 310},
    {x: 170, y: 310},
    {x: 170, y: 290},
    {x: 180, y: 290},
    {x: 180, y: 310},
    {x: 185, y: 310},
    {x: 185, y: 330},
    {x: 165, y: 330}
  ],
  'A#2': [
    {x: 180, y: 290},
    {x: 190, y: 290},
    {x: 190, y: 310},
    {x: 180, y: 310}
  ],
  'B2': [
    {x: 185, y: 310},
    {x: 190, y: 310},
    {x: 190, y: 290},
    {x: 205, y: 290},
    {x: 205, y: 330},
    {x: 185, y: 330}
  ],
  'C3': [
    {x: 205, y: 290},
    {x: 220, y: 290},
    {x: 220, y: 310},
    {x: 225, y: 310},
    {x: 225, y: 330},
    {x: 205, y: 330}
  ],
  'C#3': [
    {x: 220, y: 290},
    {x: 230, y: 290},
    {x: 230, y: 310},
    {x: 220, y: 310}
  ],
  'D3': [
    {x: 225, y: 310},
    {x: 230, y: 310},
    {x: 230, y: 290},
    {x: 240, y: 290},
    {x: 240, y: 310},
    {x: 245, y: 310},
    {x: 245, y: 330},
    {x: 225, y: 330}
  ],
  'D#3': [
    {x: 240, y: 290},
    {x: 250, y: 290},
    {x: 250, y: 310},
    {x: 240, y: 310}
  ],
  'E3': [
    {x: 245, y: 310},
    {x: 250, y: 310},
    {x: 250, y: 290},
    {x: 265, y: 290},
    {x: 265, y: 330},
    {x: 245, y: 330}
  ],
  'F3': [
    {x: 265, y: 290},
    {x: 280, y: 290},
    {x: 280, y: 310},
    {x: 285, y: 310},
    {x: 285, y: 330},
    {x: 265, y: 330}
  ],
  'F#3': [
    {x: 280, y: 290},
    {x: 290, y: 290},
    {x: 290, y: 310},
    {x: 280, y: 310}
  ],
  'G3': [
    {x: 285, y: 310},
    {x: 290, y: 310},
    {x: 290, y: 290},
    {x: 300, y: 290},
    {x: 300, y: 310},
    {x: 305, y: 310},
    {x: 305, y: 330},
    {x: 285, y: 330}
  ],
  'G#3': [
    {x: 300, y: 290},
    {x: 310, y: 290},
    {x: 310, y: 310},
    {x: 300, y: 310}
  ],
  'A3': [
    {x: 305, y: 310},
    {x: 310, y: 310},
    {x: 310, y: 290},
    {x: 320, y: 290},
    {x: 320, y: 310},
    {x: 325, y: 310},
    {x: 325, y: 330},
    {x: 305, y: 330}
  ],
  'A#3': [
    {x: 320, y: 290},
    {x: 330, y: 290},
    {x: 330, y: 310},
    {x: 320, y: 310}
  ],
  'B3': [
    {x: 325, y: 310},
    {x: 330, y: 310},
    {x: 330, y: 290},
    {x: 345, y: 290},
    {x: 345, y: 330},
    {x: 325, y: 330}
  ],
  'C4': [
    {x: 345, y: 290},
    {x: 360, y: 290},
    {x: 360, y: 310},
    {x: 365, y: 310},
    {x: 365, y: 330},
    {x: 345, y: 330}
  ],
  'C#4': [
    {x: 360, y: 290},
    {x: 370, y: 290},
    {x: 370, y: 310},
    {x: 360, y: 310}
  ],
  'D4': [
    {x: 365, y: 310},
    {x: 370, y: 310},
    {x: 370, y: 290},
    {x: 380, y: 290},
    {x: 380, y: 310},
    {x: 385, y: 310},
    {x: 385, y: 330},
    {x: 365, y: 330}
  ],
  'D#4': [
    {x: 380, y: 290},
    {x: 390, y: 290},
    {x: 390, y: 310},
    {x: 380, y: 310}
  ],
  'E4': [
    {x: 385, y: 310},
    {x: 390, y: 310},
    {x: 390, y: 290},
    {x: 405, y: 290},
    {x: 405, y: 330},
    {x: 385, y: 330}
  ],
  'F4': [
    {x: 405, y: 290},
    {x: 420, y: 290},
    {x: 420, y: 310},
    {x: 425, y: 310},
    {x: 425, y: 330},
    {x: 405, y: 330}
  ],
  'F#4': [
    {x: 420, y: 290},
    {x: 430, y: 290},
    {x: 430, y: 310},
    {x: 420, y: 310}
  ],
  'G4': [
    {x: 425, y: 310},
    {x: 430, y: 310},
    {x: 430, y: 290},
    {x: 440, y: 290},
    {x: 440, y: 310},
    {x: 445, y: 310},
    {x: 445, y: 330},
    {x: 425, y: 330}
  ],
  'G#4': [
    {x: 440, y: 290},
    {x: 450, y: 290},
    {x: 450, y: 310},
    {x: 440, y: 310}
  ],
  'A4': [
    {x: 445, y: 310},
    {x: 450, y: 310},
    {x: 450, y: 290},
    {x: 460, y: 290},
    {x: 460, y: 310},
    {x: 465, y: 310},
    {x: 465, y: 330},
    {x: 445, y: 330}
  ],
  'A#4': [
    {x: 460, y: 290},
    {x: 470, y: 290},
    {x: 470, y: 310},
    {x: 460, y: 310}
  ],
  'B4': [
    {x: 465, y: 310},
    {x: 470, y: 310},
    {x: 470, y: 290},
    {x: 485, y: 290},
    {x: 485, y: 330},
    {x: 465, y: 330}
  ],
  'C5': [
    {x: 485, y: 290},
    {x: 500, y: 290},
    {x: 500, y: 310},
    {x: 505, y: 310},
    {x: 505, y: 330},
    {x: 485, y: 330}
  ],
  'C#5': [
    {x: 500, y: 290},
    {x: 510, y: 290},
    {x: 510, y: 310},
    {x: 500, y: 310}
  ],
  'D5': [
    {x: 505, y: 310},
    {x: 510, y: 310},
    {x: 510, y: 290},
    {x: 520, y: 290},
    {x: 520, y: 310},
    {x: 525, y: 310},
    {x: 525, y: 330},
    {x: 505, y: 330}
  ],
  'D#5': [
    {x: 520, y: 290},
    {x: 530, y: 290},
    {x: 530, y: 310},
    {x: 520, y: 310}
  ],
  'E5': [
    {x: 525, y: 310},
    {x: 530, y: 310},
    {x: 530, y: 290},
    {x: 545, y: 290},
    {x: 545, y: 330},
    {x: 525, y: 330}
  ],
  'F5': [
    {x: 545, y: 290},
    {x: 560, y: 290},
    {x: 560, y: 310},
    {x: 565, y: 310},
    {x: 565, y: 330},
    {x: 545, y: 330}
  ],
  'F#5': [
    {x: 560, y: 290},
    {x: 570, y: 290},
    {x: 570, y: 310},
    {x: 560, y: 310}
  ],
  'G5': [
    {x: 565, y: 310},
    {x: 570, y: 310},
    {x: 570, y: 290},
    {x: 580, y: 290},
    {x: 580, y: 330},
    {x: 565, y: 330}
  ]
};
k2NotePolys['Db3'] = k2NotePolys['C#3'];
k2NotePolys['Eb3'] = k2NotePolys['D#3'];
k2NotePolys['Gb3'] = k2NotePolys['F#3'];
k2NotePolys['Ab3'] = k2NotePolys['G#3'];
k2NotePolys['Bb3'] = k2NotePolys['A#3'];
k2NotePolys['Db4'] = k2NotePolys['C#4'];
k2NotePolys['Eb4'] = k2NotePolys['D#4'];
k2NotePolys['Gb4'] = k2NotePolys['F#4'];
k2NotePolys['Ab4'] = k2NotePolys['G#4'];
k2NotePolys['Bb4'] = k2NotePolys['A#4'];
k2NotePolys['Db5'] = k2NotePolys['C#5'];
k2NotePolys['Eb5'] = k2NotePolys['D#5'];
k2NotePolys['Gb5'] = k2NotePolys['F#5'];
k2NotePolys['Ab5'] = k2NotePolys['G#5'];
k2NotePolys['Bb5'] = k2NotePolys['A#5'];
k2NotePolys['Db6'] = k2NotePolys['C#6'];
k2NotePolys['Eb6'] = k2NotePolys['D#6'];
k2NotePolys['Gb6'] = k2NotePolys['F#6'];