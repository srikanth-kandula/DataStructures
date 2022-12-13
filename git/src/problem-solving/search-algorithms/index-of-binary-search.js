/**
 * @description A function that accepts a sorted array and a value and returns the index of the value in the array
 */

function binarySearch(array, value) {

  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== value && start <= end) {
    if (array[middle] < value)
      start = middle + 1;
    else
      end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return array[middle] === value ? middle : -1;
}