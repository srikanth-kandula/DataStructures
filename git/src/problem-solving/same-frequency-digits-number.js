/**
 * @description A function that checks if the frequency of digits within two input positive numbers are same
 * @param {Number} num1 A number 
 * @param {Number} num2 A number
 * @returns {boolean} 
 * @example true - 182,281; 3589578, 5879385
 *          false - 34,14; 22,222
 */
function sameFrequency(num1, num2) {
  let isSameFrequency = false;
  let str1 = num1.toString();
  let str2 = num2.toString();

  //if number of digits are not same, return false
  if (str1.length === str2.length) {
    //find digits within the numbers
    let num1Digits = getDigits(num1);
    /**
     * OR
     * 
     for(let i = 0; i < str1.length; i++){
        num1Digits[str1[i]] = (num1Digits[str1[i]] || 0) + 1
     }
     */
    let num2Digits = getDigits(num2);

    //count frequency of digits in the numbers
    let num1DigitsFreqCounter = countFrequency(num1Digits);
    let num2DigitsFreqCounter = countFrequency(num2Digits);

    //compare frequencies
    for (const digit in num1DigitsFreqCounter) {
      if (num2DigitsFreqCounter.hasOwnProperty(digit) && num1DigitsFreqCounter[digit] === num2DigitsFreqCounter[digit]) {
        isSameFrequency = true;
      } else {  
        break;
      }
    }

  }

  return isSameFrequency;
}

function getDigits(num) {
  let digits = [], i = 0;

  while (num > 0) {
    digits[i] = num % 10;
    num /= 10;
    num = Math.floor(num);
    i++;
  }
  return digits;
}

function countFrequency(digitsArray) {
  let digitsFreqCounter = {};
  for (const digit of digitsArray) {
    digitsFreqCounter[digit] = ++digitsFreqCounter[digit] || 1;
  }
  return digitsFreqCounter;
}