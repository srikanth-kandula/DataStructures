/**
 * @description A function that accepts an array and a value and returns the index of the value in the array
 */

function linearSearch(arr, value) {

  let result = -1;
  if (value && arr && arr.length > 0) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        result = i;
        break;
      }
    }

  }

  return result;
}