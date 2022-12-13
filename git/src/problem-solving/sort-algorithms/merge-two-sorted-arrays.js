function mergeSortedArrays(firstArray, secondArray) {

  let i = 0, j = 0, sortedArray = [];

  while (i < firstArray.length && j < secondArray.length) {

    if (firstArray[i] < secondArray[j]) {
      sortedArray.push(firstArray[i]);
      i++;
    } else {
      sortedArray.push(secondArray[j]);
      j++;
    }

  }

  while (i<firstArray.length) {
    sortedArray.push(firstArray[i]);
    i++;
  }

  while (j<secondArray.length) {
    sortedArray.push(secondArray[j]);
    j++;
  }

  return sortedArray;

}