/**
 * @description A function that accepts an helperInput of objects and returns an helperInput of odd numbers within input.
 * This function uses recursion
 * @param {Array} arr Array of numbers 
 */
function findOddNumbers(arr) {

  let oddNumbers = [];
  if (arr.length === 0) {
    return oddNumbers;
  } else if (arr[0] % 2 !== 0) {
    return oddNumbers.push(arr[0]);
  }

  oddNumbers = oddNumbers.concat(findOddNumbers(arr.slice(1)));
  return oddNumbers;
}

/** Using helper method recursion, above function can be implemented as below */

function CollectOddNumbers(arr) {

  let oddNumbers = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    } else if (helperInput[0] % 2 !== 0) {
      oddNumbers.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return oddNumbers;
}