function capitalize(string){
    if (string.length === 0) return string;
    let firstLetter = string.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let restOfString = string.slice(1);
    restOfString = restOfString.toLowerCase();
    return firstLetter + restOfString;
}

export default capitalize;