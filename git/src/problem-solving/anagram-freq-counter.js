/**
 * @description A function that takes two strings as input and determines if they are anagrams.
 * 'Uses Frequency counter algorithm'
 * Assumption - input strings contain only alphabets
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} true if the input strings are anagrams else false
 * 
 * @examples anagrams - '',''; 'anagram' 'nagaram'; 'aabbcc' 'aacbcb'
 *           non-anagrams - 'aaz' 'zza'; 'rat' 'car'; 'awesome' 'awesom' 
 */

function validAnagram(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let result = false;

  if (string1.length === string2.length) {
    let string1FreqCounter = {};

    if(string1.length === 0 && string2.length === 0) {
      result = true;
    }

    for (const char of string1) {
      string1FreqCounter[char] = ++string1FreqCounter[char] || 1;
    }

    for (const char of string2) {
      if (string1FreqCounter[char]) {
        string1FreqCounter[char] -=1;
        result = true;
      } else {
        result = false;
        break;
      }
    }

  }

  return result;
}