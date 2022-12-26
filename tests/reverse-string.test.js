import reverseString from "../reverse-string";

test("Empty string", () => {
    expect(reverseString("")).toBe("");
})

test("Single letter", () => {
    expect(reverseString("g")).toBe("g");
})

test("Single word", () => {
    expect(reverseString("hello")).toBe("olleh");
})

test("Three words with capitals", () => {
    expect(reverseString("One Two Three")).toBe("eerhT owT enO");
})