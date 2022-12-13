function pivotHelper (array, start=0, end=array.length-1) {

  let pivotIndex = start;
  let storeIndex = pivotIndex;

  for (let i = pivotIndex+1; i<=end; i++) {
    if (array[i] < array[pivotIndex]) {
      ++storeIndex;

      //swap element under consideration with the element at storeIndex
      let temp = array[i];
      array[i] = array[storeIndex];
      array[storeIndex] = temp;
    }
  }

  //swap the latest lesser element with pivot
  let temp = array[pivotIndex];
  array[pivotIndex] = array[storeIndex];
  array[storeIndex] = temp;

  return storeIndex;
}