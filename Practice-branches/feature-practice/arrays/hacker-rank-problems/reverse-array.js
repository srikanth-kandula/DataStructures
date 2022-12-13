//Hackerrank problem

/** The below code will NOT work as objects/arrays are of reference type.
 * Both “a” and temp point to same location. Changing the value using a[i] will also change value of temp[i].
 */

function reverseArray1(a) {
  // Write your code here
  let temp = a;
  let length = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    a[i] = temp[length - i];
  }

  return a;
}


function reverseArray(a) {
  // Write your code here
  let temp = [];
  let length = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    temp[i] = a[length - i];
  }

  a = temp;

  return a;
}

function reverseArray2(a) {
  // Write your code here
  let swapValue;
  let maxOrder = a.length - 1;
  let halfLength = a.length/2;

  for (let i = 0; i < halfLength ; i++) {
    swapValue = a[i];
    a[i] = a[maxOrder - i];
    a[maxOrder - i] = swapValue;
  }

  return a;
}