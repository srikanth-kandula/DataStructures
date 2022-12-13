/**
 * @description A function which accepts variable number of arguments and checks whether there are any duplicates
 * among them.
 * 
 * @example true - 1,2,2;   'a','b','c','a';    'a',1,2,9,'z','a'
 *          false - 1,2,3;    'a',1,2,9,'z','1';
 */
function areThereDuplicates() {

  /**
   * count frequency of each argument. If count of any argument is more than 1, return true
   */
  let freqCounter = {}, isDuplicateAvailable = false;
  let i = 0;
  // we need not know about all arguments to decide duplicate. Hence we need not use freq-counter as a POTENTIAL decrease 
  // in execution time is possible.
  while (arguments[i]) {
    if (freqCounter[arguments[i]]) {
      isDuplicateAvailable = true;
      break;
    } else {
      freqCounter[arguments[i]] = 1;
    }
    i++;
  }

  return isDuplicateAvailable;

  /**
   * alternate solution
   * 
   return new Set(arguments).size !== arguments.length;
   
   */
}

/**Multi-pointer pattern */

function areThereDuplicates () {
  args.sort((a, b) => a > b); // does this work for different types of arguments?
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}