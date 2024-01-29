/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
 const binarySearch = (list, item) => {   // 01 Please binary search...
  let low = 0;                            // 04 Low and high keep track of which part of the list im searching
  let high = list.length - 1;             // 05 

  while (low <= high) {                   // 06 While you have not narrowed it down to one element
    const mid = Math.floor((low + high) / 2);// 07 Check the middle item
    const guess = list[mid];

    if (guess === item) {                 // 08 Found the mid item
      return mid;
    } else if (guess > item) {            // 09 The guess was too high
      high = mid - 1;
    } else {                              // 10 The guess was too low
      low = mid + 1;
    }
  }

  return null;                            // 11 The item does not exist
};

const myList = [1, 3, 5, 7, 9];         // 02 my list, tests the code

console.log(binarySearch(myList, 3));   // 03 show me this result in console = 1
console.log(binarySearch(myList, -1));  // null when item was not found