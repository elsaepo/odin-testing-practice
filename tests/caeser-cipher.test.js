import caeserCipher from "../caeser-cipher";

test("Shift single word by 1", () => {
    expect(caeserCipher("hello", 1)).toBe("ifmmp");
})

test("Shift multiple words by 2", () => {
    expect(caeserCipher("hello there", 2)).toBe("jgnnq vjgtg");
})

test("Wrap z properly", () => {
    expect(caeserCipher("xyz", 1)).toBe("yza");
})

test("Multiple words, shift not specified (default 13)", () => {
    expect(caeserCipher("my name is carl")).toBe("zl anzr vf pney");
})

test("Punctuation", () => {
    expect(caeserCipher("hi, carl!", 1)).toBe("ij, dbsm!");
})

test("Keep same case", () => {
    expect(caeserCipher("We can DO this", 1)).toBe("Xf dbo EP uijt");
})