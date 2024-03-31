const { encodeToMorse } = require("../js/morseCodeLogic.js");

describe("encodeToMorse functionality", () => {
  test("Encodes 'SOS' correctly and reports no unsupported characters", () => {
    expect(encodeToMorse("SOS")).toMatchObject({
      output: "... --- ...",
      error: null,
      unsupportedChars: [],
    });
  });

  test("Returns an error for empty input", () => {
    expect(encodeToMorse("")).toEqual({
      error: "Please enter some text to encode.",
      output: "",
      unsupportedChars: [],
    });
  });

  test("Identifies unsupported characters and encodes the rest", () => {
    expect(encodeToMorse("SOS 123!")).toMatchObject({
      output: "... --- ... / .---- ..--- ...-- ",
      error: "Some characters could not be encoded.",
      unsupportedChars: ["!"],
    });
  });

  test("Encodes text irrespective of case", () => {
    expect(encodeToMorse("sos")).toMatchObject({
      output: "... --- ...",
      error: null,
      unsupportedChars: [],
    });
  });
});
