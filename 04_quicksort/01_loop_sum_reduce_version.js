/**
 * Sums values in the array by function "reduce"
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
const sumReduce = array => array.reduce((prev, curr) => prev + curr); //01 sums prev index 0 and curr 1, then sums the prev result with curr index 3

console.log(sumReduce([2, 4, 6])); // 12