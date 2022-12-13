import './merge-two-sorted-arrays';

function mergeSort (array) {

  if (array.length <= 1) return array;

  var mid = Math.floor(array.length/2);

  var leftArray = mergeSort(array.slice(0,mid));
  var rightArray = mergeSort(array.slice(mid));

  return mergeSortedArrays(leftArray, rightArray);

}