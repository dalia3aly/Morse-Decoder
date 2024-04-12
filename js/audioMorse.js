
// // Future Feature/Experimental: Morse Code Sound Output // //




// function playMorseCode(morseCode) {
//     let timeOffset = 0; // Time offset for scheduling sounds
//     const dotDuration = 0.2; // Duration of a dot in seconds
//     const dashDuration = dotDuration * 3; // Duration of a dash
//     const spaceDuration = dotDuration * 7; // Duration of space between words

//     morseCode.split('').forEach(symbol => {
//         switch(symbol) {
//             case '.':
//                 setTimeout(playDot, timeOffset * 1000); // Schedule dot
//                 timeOffset += dotDuration;
//                 break;
//             case '-':
//                 setTimeout(playDash, timeOffset * 1000); // Schedule dash
//                 timeOffset += dashDuration;
//                 break;
//             case '/': // Assuming '/' is used to represent space between words
//                 timeOffset += spaceDuration; // Add pause for space between words
//                 break;
//             default:
//                 timeOffset += dotDuration; // Pause for space between letters
//         }
//         // Add a short pause between symbols (same as dot duration)
//         timeOffset += dotDuration;
//     });
// }


// function encodeToMorseAndPlay() {
//     const textInput = document.getElementById('textInput').value.toUpperCase();
//     let morseCodeOutput = textInput.split('').map(char => morseCodeMap[char] ? morseCodeMap[char] : '').join(' ');
//     document.getElementById('textOutput').value = morseCodeOutput;

//     playMorseCode(morseCodeOutput); // Play the Morse code as audio
// }


// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


// function playDot() {
//     const oscillator = audioCtx.createOscillator();
//     oscillator.type = 'sine'; // Sine wave — other types are 'square', 'sawtooth', 'triangle'
//     oscillator.frequency.setValueAtTime(700, audioCtx.currentTime); // Frequency in hertz
//     oscillator.connect(audioCtx.destination);
//     oscillator.start();
//     oscillator.stop(audioCtx.currentTime + 0.2); // Stop after 200 ms
// }

// function playDash() {
//     const oscillator = audioCtx.createOscillator();
//     oscillator.type = 'sine';
//     oscillator.frequency.setValueAtTime(700, audioCtx.currentTime);
//     oscillator.connect(audioCtx.destination);
//     oscillator.start();
//     oscillator.stop(audioCtx.currentTime + 0.6); // Stop after 600 ms (3 times the dot duration)
// }

