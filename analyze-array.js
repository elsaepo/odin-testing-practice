function analyzeArray(arr){
    console.log(arr)
    if (arr.some(num => typeof num !== "number")) return null;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    let average = arr.reduce((base, add) => base + add, 0)/length;
    console.log(min)
    return { average, min, max, length }
}

console.log(analyzeArray([1.5,2.5,4,2]))

export default analyzeArray;