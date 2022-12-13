import './pivot-helper';

function quickSort (array, left = 0, right = array.length-1) {

  if (left<right) {
    //sort the pivot element (here, first/left element)
    let pivotIndex = pivotHelper(array, left, right);
    //sort left array
    quickSort(array, left, pivotIndex - 1);
    //sort right array
    quickSort(array, pivotIndex + 1, right);
  }

  //return if array has only one element
  return array;
}