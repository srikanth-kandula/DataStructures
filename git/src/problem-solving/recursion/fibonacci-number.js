/**
 * @description A function that returns the nth fibonacci number
 * 1,1,2,3,5,8
 */

function fibNumber(num) {

  if (num <= 2)
    return 1;
  return fibNumber(num - 1) + fibNumber(num - 2);

}