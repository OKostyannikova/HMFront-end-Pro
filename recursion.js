const result = [];
function printNumbers(n) {
    n > 0 ? result.unshift(n) && printNumbers(n - 1) : 0;
    return result;
}
console.log(...printNumbers(5));