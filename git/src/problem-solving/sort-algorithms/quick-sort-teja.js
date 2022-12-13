import './pivot-helper';

function quickSrt(array, pivotIndex, right) {

  while(pivotIndex < right) {
    q = pivotHelper(array, pivotIndex, right); // partition

    if(q-pivotIndex < right - pivotIndex){ // checks pivotIndex < q < right
      quickSrt(array, pivotIndex, q-1); // sort left portion of array
      pivotIndex = q+1; // point pivot to immediate next element
    }
    else {
      quickSrt(array, q + 1, right); // sort right portion of array
      right = q-1; // change right to immediate previous element
    }
  }

  // it doesn't return any value!
}