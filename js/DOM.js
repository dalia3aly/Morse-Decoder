import { encodeToMorse, decodeFromMorse } from "./morseCodeLogic.js";

// Encoding DOM Logic
document.addEventListener("DOMContentLoaded", function () {
    const encodeButton = document.getElementById("encodeButton");
    if (encodeButton) {
        encodeButton.addEventListener("click", function () {
            const textInput = document.getElementById("textInput").value;

            // empty input check
            if (!textInput.trim()) {
                Swal.fire({
                    title: 'Missing Input!',
                    text: 'Please enter some text to encode.',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                });
                return; // exit
            }

            const { output, unsupportedChars } = encodeToMorse(textInput); 

            // display a warning and inform the user of unsupported characters
            if (unsupportedChars.length > 0) {
                Swal.fire({
                    title: 'Unsupported Characters!',
                    text: 'These characters were disregarded: ' + unsupportedChars.join(", "),
                    icon: 'warning',
                    confirmButtonText: 'Cool, continue'
                });
            }

            // update the output regardless of whether there were unsupported chars or not
            document.getElementById("textOutput").value = output;
        });
    }
});


// Decoding DOM Logic
document.addEventListener("DOMContentLoaded", function () {
    const decodeButton = document.getElementById("decodeButton");
    if (decodeButton) {
        decodeButton.addEventListener("click", function () {
            const morseInput = document.getElementById("decoderInput").value; 

            // empty input check
            if (!morseInput.trim()) {
                Swal.fire({
                    title: 'Missing Input!',
                    text: 'Please enter some Morse code to decode.',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                });
                return; // exit
            }

            try {
                const { output } = decodeFromMorse(morseInput);

                // update the output if no error is thrown
                document.getElementById("textOutput").value = output;
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }

            document.getElementById("textOutput").value = output;
        });
    }
});


// Copy to Clipboard Function
  const copyButton = document.getElementById("copyButton");
if (copyButton) {
    copyButton.addEventListener("click", function () {
        const textOutput = document.getElementById("textOutput");
        navigator.clipboard
            .writeText(textOutput.value)
            .then(() => {
                Swal.fire({
                    title: 'Done!',
                    text: 'Output copied to clipboard',
                    icon: 'success',
                    confirmButtonText: 'Cool!'
                });
            })
            .catch((err) => console.error("Failed to copy text: ", err));
    });
}
