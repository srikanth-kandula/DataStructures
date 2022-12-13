/**
 * @description A function that accepts a sorted array and returns a left pair of numbers within array whose sum equals zero.
 * @param {Array} numArray sorted array of numbers
 * @examples [-3,-2,-1,0,1,2,4], [-3,-2,-1,0,1,3,4], [-3,-2,-1,0,4,5,6], [-3,-2,-1,0]
 * @returns {Array} An array containing first pair of numbers whose sum is zero, else undefined.
 */
function sumZero(numArray) {

  let left = 0;
  let right = numArray.length - 1;
  let sumZeroArray;

  while (left < right) {
    let sum = numArray[left] + numArray[right]
    if (sum === 0) {
      sumZeroArray = [numArray[left], numArray[right]];
      break;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return sumZeroArray;

}