/**
 * @description A function that implements selection sort on an array of numbers
 * @example [5,2,9,1,4] -> [1,2,4,5,9]
 * Psuedo Code:
 * 1) Take the initial element and consider it to be min
 * 2) Compare it with each of the other elements in the array (starting from beginning to end)
 *    If the new element is smaller mark it as min and compare min with remaining elements of array
 * 3) Swap the initial element with min at the end of the loop
 * 4) increment to next position and repeat the above logic until only one element is left in the array
 */


function selectionSort (array) {

  for(let i=0; i< array.length; i++) {
    let minLocation = i;
    for (let j=i+1; j<array.length; j++) {
      if(array[j] < array[minLocation]) {
        minLocation = j;
      }
    }
    
    //swap
    if (i !== minLocation) {
      let temp = array[i];
      array[i] = array[minLocation];
      array[minLocation] = temp;
    }
  }

  return array;
}