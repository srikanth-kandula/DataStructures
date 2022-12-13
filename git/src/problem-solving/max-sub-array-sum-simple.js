/**
 * @description A function which accepts an array of numbers, sub array size as inputs and returns the maximum
 * sub array sum
 * @param {Array} numArray An array of numbers
 * @param {Number} subArrayLength size of the sub array whose sum needs to calculated
 * @example [-1,1,2,3,4,5],3 -> 12; [9,8,-4,3],2 -> 17, [1,2,3,2,1], 3 -> 7, [1,1,1,1,1,1,1,1], 2 -> 2,
 * [], 1 -> undefined, [1,1,1,1,1,1,1,1], 1 -> 1
 */
function maxSubArraySum(numArray, subArrayLength) {

  // time complexity is O(n*n)
  let tempSum; maxSum = 0;
  if (subArrayLength > numArray.length) {
    maxSum = undefined;
  } else {
    for (let i = 0; i <= numArray.length - subArrayLength; i++) {
      tempSum = numArray[i];
      for (let j = 1; j < subArrayLength; j++) {
        tempSum += numArray[i + j];
      }
      maxSum = Math.max(tempSum, maxSum);
    }
  }

  return maxSum;

}