/**
 * 
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

  Input: digits = "23"
  Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

  Input: digits = ""
  Output: []


Example 3:

  Input: digits = "2"
  Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 */

function letterCombinations(digits) {
  /**backtracking*/

  if (!digits) {
    return [];
  }

  //global result
  let combinations = [];
  let mapTable = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  //dfs recursive helper function
  function dfs(i, path) {

    //base case
    if (path.length === digits.length) {
      combinations.push(path.join(""));
      return;
    }

    //iterative case
    let chars = mapTable[digits[i]].split("");
    for (let char of chars) {
      path.push(char);
      dfs(i + 1, path);
      path.pop();
    }
  }


  dfs(0, []);
  return combinations;
}

function letterCombinations1(digits) {

  if (digits == "") {
    return [];
  }
  let table = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  let res = [];
  let que = [''];

  while (que.length > 0) {
    let str = que[0];
    que.shift();

    if (str.length == digits.length) {
      res.push(str); // if all digits are replaced with char push to result
    } else {
      //get the current number from the digits i.e if str.length = 2 , digits = 123, then s = 3
      let s = Number(digits.charAt(str.length));
      let val = table[s]; // get char from the table i.e def for s =3

      for (i = 0; i < val.length; i++) {
        que.push(str + val.charAt(i));
      }
    }
  }

  return res;

}

// Driver code
let str = "23";
document.write(letterCombinations(str));
	// This code is contributed by Niloy Biswas(niloy1995)