/**
 * Sums values in the array by loop "for"
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
const sumLoop = array => { //01 Global frame
  let result = 0; //03
  for (let i = 0; i < array.length; i++) { //04 //06 for loop runs and sums index 1 and 2 to index 0 on the array
    result += array[i]; //05 saves 2 as result
  }
  return result; //07 returns array sum = 12
};

console.log(sumLoop([2, 4, 6])); //02 //08 Prints result