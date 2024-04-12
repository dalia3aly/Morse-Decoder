const { decodeFromMorse } = require("../js/morseCodeLogic");

describe("decodeFromMorse functionality", () => {
  test("Decodes Morse code '... --- ...' correctly to 'sos'", () => {
    expect(decodeFromMorse("... --- ...")).toMatchObject({
      output: "sos",
      unsupportedChars: [],
    });
  });

  test("Decodes Morse code '.... . .-.. .-.. ---' correctly to 'hello'", () => {
    expect(decodeFromMorse(".... . .-.. .-.. ---")).toMatchObject({
      output: "hello",
      unsupportedChars: [],
    });
  });

  test("Returns an error for empty Morse code input", () => {
    expect(decodeFromMorse("")).toEqual({
      error: "Please enter some Morse code to decode.",
      output: "",
      unsupportedChars: [],
    });
  });

  test("Handles inputs with continuous unsupported Morse code sequences", () => {
    expect(() => decodeFromMorse("---- ----")).toThrow(
      "Unsupported Morse code sequences detected: ----"
    );
  });

  test("Exits early with an error for inputs containing unsupported Morse code sequences", () => {
    expect(() => decodeFromMorse("... --- ... / ----")).toThrow(
      "Unsupported Morse code sequences detected: ----"
    );
  });

  test("Decodes Morse code with spaces between words correctly", () => {
    expect(decodeFromMorse("... --- ... / .---- ..--- ...--")).toMatchObject({
      output: "sos 123",
      unsupportedChars: [],
    });
  });
});
