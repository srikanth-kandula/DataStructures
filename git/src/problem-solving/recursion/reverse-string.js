/**
 * @description A function that returns the revers of the input string
 * @example 'awesome' -> 'emosewa';  'rithmschool' -> 'loohcsmhtir'
 */

function reverse (str) {

  let reverseString = '';

  if (str.length === 1)
    return str;  
  reverseString = str.slice(-1) + reverse(str.slice(0,-1));
  
  return reverseString;
}