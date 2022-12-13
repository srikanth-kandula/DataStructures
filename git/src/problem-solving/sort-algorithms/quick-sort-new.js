console.clear();

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = getPivotIndex(array, left, right); //one element is sorted

    quickSort(array, left, pivotIndex - 1);//sort left side of array
    quickSort(array, pivotIndex + 1, array.length - 1);//sort right side of array
  }

  return array;
}


function getPivotIndex(array, start = 0, end = array.length - 1) {
  let startIndex = start;
  let pivotIndex = startIndex;

  for (let i = start + 1; i < end; i++) {
    if (array[i] < array[startIndex]) {
      pivotIndex++;

      let temp = array[i];
      array[i] = array[pivotIndex];
      array[pivotIndex] = temp;
    }
  }

  let temp = array[startIndex];
  array[startIndex] = array[pivotIndex];
  array[pivotIndex] = temp;

  return pivotIndex;
}

var array = [9, 7, 5, 6, 2, 23, 56, -1, 10, 5, 5, -6];
var num = 23;

quickSort(array)