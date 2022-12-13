function insertSort (array, n){ // n is length of array

  for(let i=1; i<=n; i++){ // pick one element in array
    for(let j=0; j<=i-1; j++){ // loop through all previous elements from the current element
      if(array[i]<array[j]){
        temp = array[i];

        for(let k=i; k>=j+1; k--){ // from k to i
          array[k] = array[k-1]; // O(n) for this line?
        }
        array[j] = temp;
      }
    }
  }

}