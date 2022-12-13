/**
 * @description A function which accepts a sorted array of numbers and counts the unique values in the array
 * @param {Array} numArray An array of sorted numbers
 * @returns {Number} Number of unique numbers in the input array
 * @examples [-1,0,1,2,3] -> 5, [1,1,1,1,4] -> 2, [-1,1,1,2,9,1,2] -> 4, [-8,-8,-7,7,8,8,289] -> 5
 */
function countUniqueValues (numArray) {

  /* using freq-counter pattern - O(n)
  let uniqueNumbers = {};
  for (const num of numArray) {
    if (!uniqueNumbers[num]) {
      uniqueNumbers[num] = 1;
    }
  }
  return Object.keys(uniqueNumbers).length;
  */

  //using multi-pointer pattern - O(n)
  let left = 0;
  let right = 1;
  while (right < numArray.length) {
    if (numArray[left] !== numArray[right]) {
      left++;
      numArray[left] = numArray[right];
    }
    right++;
  }

  return left ? left + 1 : 0;

}