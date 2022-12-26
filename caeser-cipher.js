function caeserCipher(string, shift){
    if (shift && (typeof shift !== "number" || shift < 0 || !Number.isInteger(shift))) return "Invalid shift value";
    shift = shift ? shift%26 : 13;
    let stringArray = string.split("");
    stringArray = stringArray.map(char => {
        if (char.match(/[A-Za-z]/)) return convertSingleLetter(char, shift);
        else return char;
    })
    return stringArray.join("");
}

function convertSingleLetter(letter, shift){
    const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let isUpperCase = letter.toUpperCase() === letter ? true : false;
    let letterIndex = letterArray.indexOf(letter.toLowerCase());
    let newIndex = (letterIndex + shift)%26;
    let newLetter = letterArray[newIndex];
    return isUpperCase ? newLetter.toUpperCase() : newLetter;
}

export default caeserCipher;