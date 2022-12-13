//hackerrank problem

/**
 * 2D Array - DS
 * 
 * Given a 6*6 2D array
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
 * 
 * An hourglass in Array is a subset of values with indices falling in this pattern in array's graphical representation:
 * a b c
     d
   e f g
 * There are 16 hourglasses in array. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in array, then print the maximum hourglass sum. The array will always be 6*6.
 * 
 * Example
      array = 
      
      -9 -9 -9  1 1 1 
      0 -9  0  4 3 2
      -9 -9 -9  1 2 3
      0  0  8  6 6 0
      0  0  0 -2 0 0
      0  0  1  2 4 0
 * 
      The 16 hourglass sums are:

          -63, -34, -9, 12, 
          -10,   0, 28, 23, 
          -27, -11, -2, 10, 
            9,  17, 25, 18
The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

              0 4 3
                1
              8 6 6

              Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function sum(array, i, j) {
  return   array[i][j] + array[i][j + 1] + array[i][j + 2]
         + array[i + 1][j + 1]
         + array[i + 2][j] + array[i + 2][j + 1] + array[i + 2][j + 2];
}

function hourglassSum(arr) {
  // Write your code here
  let maxValue = -Infinity;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sumValue = sum(arr, i, j);
      if (sumValue > maxValue)
        maxValue = sumValue;
    }
  }

  return maxValue;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + '\n');

  ws.end();
}
