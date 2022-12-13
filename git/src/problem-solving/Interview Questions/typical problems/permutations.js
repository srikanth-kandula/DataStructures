/**
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */

console.clear();

function findPermutations(array) {
  /*backtracking*/

  //global result
  let result = [];

  //dfs recursive helper function - visualize the tree and its structure formation
  function dfs(i, array) {
      //base case
      if(i === array.length) {
        result.push(array.slice());
        return;
      }

      //iterative case
      for(let j=i; j<array.length; j++) {
        //swap
        [ array[i], array[j] ] = [ array[j], array[i] ];
        //iterate
        dfs(i+1, array);
        //backtrack by swapping the swapped elements
        [array[i], array[j]] = [array[j], array[i]];
      }
  }

  dfs(0, array);

  return result;
}

let nums = [1,2,3,4]
findPermutations(nums);