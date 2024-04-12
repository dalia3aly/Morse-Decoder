// Morse Code Translation Map
const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",

  " ": "/",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  ";": "-.-.-.",
  "?": "..--..",
  "(": "-.--.",
  "=": "-...-",
  ")": "-.--.-",
  "&": ".-...",
  "@": ".--.-.",
  "'": ".----.",
  '"': ".-..-.",
};

// Encode text to Morse code function
export function encodeToMorse(textInput) {
  if (!textInput.trim()) {
    return {
      output: "",
      error: "Please enter some text to encode.",
      unsupportedChars: [],
    };
  }

  let unsupportedChars = [];
  let morseCodeOutput = textInput
    .toUpperCase()
    .split("")
    .map((char) => {
      if (morseCodeMap.hasOwnProperty(char)) {
        return morseCodeMap[char];
      } else {
        unsupportedChars.push(char);
        return "";
      }
    })
    .join(" ");

  // handle duplicates from the unsupportedChars array
  unsupportedChars = [...new Set(unsupportedChars)];

  return {
    output: morseCodeOutput,
    error:
      unsupportedChars.length > 0
        ? "Some characters could not be encoded."
        : null,
    unsupportedChars: unsupportedChars,
  };
}



// Decode Morse code to Latin letters function
export function decodeFromMorse(morseInput) {
  if (!morseInput.trim()) {
    return {
      output: "",
      error: "Please enter some Morse code to decode.",
      unsupportedChars: [],
    };
  }

  let unsupportedMorse = [];
  let englishOutput = morseInput
    .split(" ")
    .map((sequence) => {
      // find the key in the morseCodeMap that matches the sequence
      let decodedChar = Object.keys(morseCodeMap).find(
        (key) => morseCodeMap[key] === sequence
      );
      if (!decodedChar) {
        unsupportedMorse.push(sequence);
        return null;
      }
      return decodedChar;
    })
    .join("");

    if (unsupportedMorse.length > 0) {
      throw new Error(
        "Unsupported Morse code sequences detected: " +
          unsupportedMorse.join(", ")
      );
    }

    return {
      output: englishOutput.replace(/\//g, " ").toLowerCase(), // replace slashes with spaces and convert to lowercase before returning
      unsupportedChars: [],
    };
}
