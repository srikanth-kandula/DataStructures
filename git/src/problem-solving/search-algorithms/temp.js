/**
 * Finds and returns 'm' within input array
 * @param {Array} array an array of distinct integers which are sorted in increasing order upto m and then in 
 * decreasing order from m.
 * @param {Number} n length of array
 */

function findMax(array, n) {

  if (array[1] < array[0]) {
    console.log("value of m: " + 1 + " element is: " + array[1])
    return 1;
  }
  if (array[n] > array[n - 1]) {
    console.log("value of m: " + n + " element is: " + array[n])
    return n;
  }

  let pivot = Math.floor(n / 2);
  console.log(pivot)

  let start = 0; let end = n;

  while (start < end) {

    if (array[pivot - 1] < array[pivot]) {
      if (array[pivot] > array[pivot + 1]) {
        console.log("value of m: " + pivot + " element is: " + array[pivot])
        return pivot;
      } else { // array[pivot-1] < array[pivot] < array[pivot+1]
        start = pivot + 1;
      }
    } else { // array[pivot-1] > array[pivot]
      end = pivot - 1;
    }

    pivot = Math.floor((start + end) / 2);
    console.log("start: " + start + " end: " + end + " pivot: " + pivot)
  }

  if (start === end) {
    console.log("value of m: " + start + " element is: " + array[start])
  } else {
    console.log("invlaid array")
  }

}

console.clear();
findMax([0, 1, 2, 7, -1, -4, -6, -8], 7)