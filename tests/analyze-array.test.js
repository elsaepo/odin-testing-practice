import analyzeArray from "../analyze-array";

test("Gets min", () => {
    expect(analyzeArray([-4, 2, 6.6, -13.8, 0])).toMatchObject({
        min: -13.8
    })
})

test("Gets max", () => {
    expect(analyzeArray([-4, 2, 6.6, -13.8, 0])).toMatchObject({
        max: 6.6
    })
})

test("Gets length", () => {
    expect(analyzeArray([-4, 2, 6.6, -13.8, 0])).toMatchObject({
        length: 5
    })
})

test("10 numbers in order", () => {
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10])).toMatchObject({
        average: 5.5,
        min: 1,
        max: 10, 
        length: 10
    })
})

test("6 positive ints in order", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("Positive and negative ints", () => {
    expect(analyzeArray([-8, -2, 0, 1, 4])).toMatchObject({
        average: -1,
        min: -8,
        max: 4,
        length: 5
    })
})

test("Non-number in array", () => {
    expect(analyzeArray([3, 2, 6, "hi", 9, 123])).toBe(null);
})

test("Multiple fractions", () => {
    expect(analyzeArray([1.5,2.5,4,2])).toMatchObject({
        average: 2.5,
        min: 1.5,
        max: 4,
        length: 4
    })
})