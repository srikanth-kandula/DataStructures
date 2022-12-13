/**
 * @description A function that implements bubble sort an array of integers
 */


function bubbleSort (array) {
  let noSwap;
  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (let j=0; j<i-1; j++) {
      if(array[j]>array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;

        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return array;
}