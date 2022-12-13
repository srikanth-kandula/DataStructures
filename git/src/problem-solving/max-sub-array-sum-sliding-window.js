/**
 * @description A function which accepts an array of numbers, sub array size as inputs and returns the maximum
 * sub array sum
 * @param {Array} numArray An array of numbers
 * @param {Number} subArrayLength size of the sub array whose sum needs to calculated
 * @example [-1,1,2,3,4,5],3 -> 12; [9,8,-4,3],2 -> 17, [1,2,3,2,1], 3 -> 7, [1,1,1,1,1,1,1,1], 2 -> 2,
 * [], 1 -> undefined, [1,1,1,1,1,1,1,1], 1 -> 1
 */
function maxSubArraySum(numArray, subArrayLength) {

  let maxSum=0, tempSum=0;
  let arrayLength = numArray.length;
  if (!arrayLength || subArrayLength > arrayLength) {
    maxSum = undefined;
  } else {
    
    for (let i = 0; i < subArrayLength; i++) {
      maxSum += numArray[i];
    }
    tempSum = maxSum;
    for (let i = subArrayLength; i < arrayLength; i++) {
      tempSum = tempSum - numArray[i - subArrayLength] + numArray[i];
      maxSum = Math.max(tempSum, maxSum);
    }    

  }

  return maxSum;

}