import calculator from "../calculator";

test("Add two positive numbers", () => {
    expect(calculator.add(2, 5)).toBe(7);
})

test("Add negative and positive", () => {
    expect(calculator.add(-2, 5)).toBe(3);
})

test("Add 0 and 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
})

test("Subtract to a positive", () => {
    expect(calculator.subtract(8, 5)).toBe(3);
})

test("Subtract to a negative", () => {
    expect(calculator.subtract(5, 8)).toBe(-3);
})

test("Divide two positive ints to an int", () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test("Divide a positive int by a negative int", () => {
    expect(calculator.divide(6, -3)).toBe(-2);
})

test("Divide 2 negative ints to a positive fraction", () => {
    expect(calculator.divide(-9, -6)).toBe(1.5);
})

test("Divide by 0", () => {
    expect(calculator.divide(5, 0)).toBe(null);
})

test("Multiple 2 positive ints", () => {
    expect(calculator.multiply(2, 8)).toBe(16);
})

test("Multiple positive int and negative int", () => {
    expect(calculator.multiply(4, -6)).toBe(-24);
})

test("Multiple int and fraction to an int", () => {
    expect(calculator.multiply(4, 3.5)).toBe(14);
})