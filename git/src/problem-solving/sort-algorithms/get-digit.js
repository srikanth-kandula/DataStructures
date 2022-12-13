/**
 * @description A function that returns the digit of the number at the specified position
 */

function getDigit(number, position) {

  // use Math.abs to work even for negative numbers
  for (let i = 0; i <= position; i++) {
    number = number / 10;
    i++;
  }

  number = Math.floor(number);
  return number % 10;

}