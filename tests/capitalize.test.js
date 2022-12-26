import capitalize from "../capitalize";

test("test", () => {
    expect(1).toBe(1);
})

test("No letters", () => {
    expect(capitalize("")).toBe("");
})

test("Single letter", () => {
    expect(capitalize("g")).toBe("G");
})

test("Single word, no spaces", () => {
    expect(capitalize("ben")).toBe("Ben");
})

test("Two words, one space", () => {
    expect(capitalize("hello there")).toBe("Hello there");
})

test("Cases changing throughout multiple words", () => {
    expect(capitalize("mY fAvOuRITe FOod is riCe")).toBe("My favourite food is rice");
})