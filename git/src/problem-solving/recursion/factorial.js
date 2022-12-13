/**
 * @description: A function that returns the factorial of a given number
 * @param {number} num
 */

function factorial (num) {

  if (num === 0) {
    return 1;
  }

  return num * factorial(--num);
}