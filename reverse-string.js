function reverseString(string){
    let stringArray = string.split("");
    stringArray = stringArray.reverse();
    let newString = stringArray.join("");
    return newString;
}

export default reverseString;