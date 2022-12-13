/**
 * @description A function that accepts a base and power and returns base raised to the power using recursion.
 * Negative bases and exponents are not expected.
 * @param {number} base A number whose power should be found
 * @param {number} exponent A number to which the base needs to be raised
 * @example 2,0 -> 1; 2,2 -> 4;  4,3 ->64
 */

function power(base, exponent) {

  /*Plan: 
  base case 2,1 -> return 2
  else return power (e, exp-1)
  */

  if (exponent === 0) {
    return 1;
  }
  return power(base, --exponent);
}