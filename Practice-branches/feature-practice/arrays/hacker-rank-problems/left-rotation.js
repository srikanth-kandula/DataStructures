//hackerrank problem

/**
 * Left Rotation
 * 
 * A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d , rotate the array that many steps left and return the result.
 * 
 * Example: d=2, arr = [1,2,3,4,5]
 * 
 * expected output = [3,4,5,1,2]
 * 
 * Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
 * 
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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) { // 1,2,3,4,5; 3
  // Write your code here
  if (arr.length > 1) {
    let rotatingValue = null;
    let numOfShifts = arr.length - 1; // 4
    let j;
    for (let i = 0; i < d; i++) {
      rotatingValue = arr[0];
      for (j = 0; j < numOfShifts; j++) { // 3
        arr[j] = arr[j + 1];
      }
      arr[j] = rotatingValue; //4
    }
  }

  return arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = rotateLeft(d, arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
