
var songs = {};

// max 6 notes per beat
// A1 B1 C2 D2 E2 F2 G2\
/*
// africa
let notes = [
  ['C4', 'F4', 'A4'], ['C4', 'F4', 'A4'], ['C4', 'F4', 'A4'], ['C4', 'F4', 'A4'],
  ['C4', 'F4', 'A4'], ['B3', 'E4', 'G4'], ['E4', 'G4', 'C5'], ['D7'], ['C7'],
  ['A6'], ['C7'], ['A6'], ['D7'], ['C7'], ['A6'], ['C7'],
  ['D7'], ['C7'], ['A6'], ['G6'], ['A6'], ['C7'], ['A6']
];
// beats until next note (inculding rests)
let durations = [
  1.5, 1, 1, 0.5,
  1, 1, 1, 0.5, 0.5,
  0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5,
  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1
];
//let bpm = 96;
let bpm = 92*2;
bpm *= 0.5;
*/

songs.ruins = {
  notes: [
    ['G#4'], ['D#5'], ['B4'], ['A#4'], ['B4'],
    ['C#5'], ['F#4'],
    ['G#4'], ['D#5'], ['B4'], ['A#4'], ['B4'],
    ['C#5'], ['F6'], ['F#6'], ['F6'], ['C#6'], // simplified
    ['G#4', 'D#6'], ['D#5'], ['B4'], ['G#6'], ['A#4'], ['B4', 'B6'],

    ['C#5', 'G#6'], ['A#6'], ['B6'], ['C#7'], ['F#4', 'A#6'],
    ['G#4', 'B6'], ['D#5'], ['B4'], ['A#6'], ['A#4'], ['B4', 'G#6'], ['F#6'],
    ['C#5', 'F6'], ['B6'],['C#7'], ['D#7'], ['F7'],
    ['G#4', 'B6'], ['D#5'], ['B4'], ['A#6'], ['A#4'], ['B4', 'D#5'],
    ['C#5', 'G#6'], ['F#6'], ['F6'], ['F#4'],
    
    ['G#4', 'F#6'], ['D#5', 'F6'], ['B4', 'D#6'], ['C#6'], ['A#4'], ['B4', 'G#6'],
    ['C#5', 'D#6'], ['D#4', 'A#5'], ['F#4', 'B5'], ['D#4', 'A#5'],
    ['G#4', 'F#5', 'C#6'], ['D#5'], ['B4', 'G#5'], ['A#4'], ['B4', 'F#5'],
    ['C#5', 'F5'], ['C#4', 'F7'], ['G#4', 'F#7'], ['B4', 'F7'], ['A#4', 'F#7'],
    ['G#4', 'F7'], ['D#5'], ['B4'], ['G#7'], ['A#4'], ['B4'],
    
    ['C#5', 'D#7'], ['F4'], ['C#4', 'A#6'], ['D#4', 'B6'], ['F4', 'A#6'],
    ['G#4', 'C#7'], ['D#5'], ['B4', 'F#5'], ['A#4'], ['B4', 'F#5'],
    ['C#5', 'F5'], ['A#6', 'A#7'], ['B6', 'B7'], ['A#6', 'A#7'],
    ['G#5', 'C#7', 'C#8'], ['D#6'], ['B5', 'F#6'], ['A#5'], ['B5', 'F#6'],
    ['C#6', 'F6']
  ],
  durations: [
    0.5, 0.5, 1, 0.5, 0.5,
    2.5, 0.5,
    0.5, 0.5, 1, 0.5, 0.5,
    1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5,

    1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
    1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
    1, 1, 0.5, 0.5,

    0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
    1.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 1, 0.5, 0.5,
    1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5,

    1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 1, 0.5, 0.5,
    1.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 1, 0.5, 0.5,
    3
  ],
  bpm: 138*0.5
};
/*
T,h,e, ,F,
i,t,
n,e,s,s,G,
r,a,m, ,p,
a,c,e,r, ,t,

e,s,t, ,i,
s, ,a, ,m,u,l,
t,i,s,t,a,
g,e, ,a,e,r,
o,b,i,c,

 ,c,a,p,a,c,
i,t,y, ,
t,e,s,t, ,
t,h,a,t, ,
p,r,o,g,r,e

s,s,i,v,e,
l,y, ,g,e,
t,s, ,m,
o,r,e, ,d,
i,
*/