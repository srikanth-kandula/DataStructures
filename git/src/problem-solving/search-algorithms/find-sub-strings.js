/**
 * @description A function that finds number of times a sub string occurs within a given string
 */

function findSubStrings(string, subString) {

  /**steps:
   * match the first character of subString with string
   * if matches compare second character and so on until length of substring.
   * else compare first character of substring with next character of string
   * repeat until length of string - length of substring
   * if substring is found, compare next char of string to first char of substring and repeat
   */
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (string[i+j] === subString[j] && j === subString.length - 1)
        count++;
      else
        break;
    }
  }

  return count;
}