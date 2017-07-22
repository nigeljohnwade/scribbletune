const st = require('scribbletune');

let chordSequence1 = ['F#m', 'C#m', 'Dmaj', 'Bm', 'Emaj', 'Amaj', 'Dmaj', 'C#m', 'Amaj'];

/* Aeolian based galloping bassline */
let aeolianOctave2Spread = st.scale('c#', 'aeolian', 2, true);
let aeolianFifths = aeolianOctave2Spread.filter((element, index) => index % 5 !== 0);
let gallop1 = 'xx-xx_-x';
let gallop2 = 'x-xx';
let kickSnarePattern = 'x---';
let kickSnareNotes = ['c2', 'c#2'];
let hiHatNotes = ['d2', 'd#2', 'd2', 'd2', 'd2', 'd2', 'd#2', 'd2'];
let hihatPatern = 'x-';
let chordSequence2 = ['C#min6', 'C#min', 'C#min7', 'C#min'];
let chordPattern = 'x___x___x___x___';
let clip = st.clip({
    notes: chordSequence2,
    pattern: chordPattern,
    accentMap:[90, 50, 70],
    //shuffle: true,
    noteLength: 1
});

st.midi(clip, 'chordSequence2' + new Date().getTime());