/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
const findSmallestIndex = (array) => { // 01 Find the Smallest index
  let smallestElement = array[0]; // 07 Stores the index of the smallest value
  let smallestIndex = 0; // 08 Stores the index of the smallest value

  for (let i = 1; i < array.length; i++) {  // 09 keeps track of the index and element we are moving to sort the array
    if (array[i] < smallestElement) { // 10
      smallestElement = array[i]; // 11
      smallestIndex = i; // 12
    }
  }

  return smallestIndex; // 13 
};

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
const selectionSort = (array) => { //02 Do selection sort
  const sortedArray = [];
  const copyArray = [...array];

  for (let i = 0; i < array.length; i++) { // 05 Search for the smallest element in the source array
    
    const smallestIndex = findSmallestIndex(copyArray);// 06 Finds the smallest element in the array
    
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);// 14 Adds the smallest element to new array and repeats from 09 to 13 until we fully sort the array
  }

  return sortedArray; // 15 When the copy of the source array is empty we return the full sorted array
};

const sourceArray = [5, 3, 6, 2, 10]; // 03 Then search inside the source array
const sortedArray = selectionSort([5, 3, 6, 2, 10]); // 04 Copy and sort inside the sorted array

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray); // [2, 3, 5, 6, 10]