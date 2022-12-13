/**
 * @description A function that implements insertion sort on an array of integers
 * @example [5,2,9,1,4] -> [1,2,4,5,9]
 * 
 * Pseudocode
 * 1) Start with second element and compare it with first element. insert/swap if necessary
 * 2) Move to the next element and compare with previous element and earlier and insert when required
 * 3) Repeat until the end of array
 */

function insertionSort (array) {

  for (let i=1; i< array.length; i++) {
    let currentValue = array[i];
    for(var j=i-1; j>=0 && array[j] > currentValue; j--) {
        array[j+1] = array[j]; //move
    }
    array[j+1] = currentValue; //insert
  }

  return array;

}