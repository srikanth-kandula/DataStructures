/** Time complexity is around O(2 power n) */
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

/** Memo-ized solution 
 * Time Complexity - O(n)
 * Space Complexity is very high compared to Tabulation version
*/
function fib_memo(num) {
  let memo = [];

  var temp = fibo(num);
  function fibo(num) {
    if (memo[num]) {
      return memo[num];
    } else {
      if (num === 1 || num === 2) {
        return 1;
      } else {
        let value = fibo(num - 1) + fibo(num - 2);
        memo[num] = value;
        return value;
      }
    }
  }

  return temp;
}

/**Tabulation -> a bottom up approach 
 * Time Complexity - O(n)
 * Very les space complexity
*/
function fib_table(num) {
  if(num === 1 || num === 2) return 1;
  let fibTable = [undefined,1,1];
  for(let i=3; i<=num; i++) {
    fibTable[i] = fibTable[i-1] + fibTable[i-2];
  }
  return fibTable[num];
}