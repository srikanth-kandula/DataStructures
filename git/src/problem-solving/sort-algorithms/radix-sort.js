import './get-digit'

function digitCount(number) {

  let numOfDigits = 0;
  if (number !== 0) { numOfDigits = Math.ceil(Math.log10(number)); }

  return numOfDigits;
}

function getMaxDigitCount(numArray) {

  let maxDigits = 0;
  for (let i = 0; i < numArray.length; i++) { maxDigits = Math.max(maxDigits, digitCount(numArray[i])); }

  return maxDigits;
}

function radixSort(numArray) {

  let maxDigitCount = getMaxDigitCount(numArray);

  for (let i = 0; i <= maxDigitCount; i++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < numArray.length; j++) {
      let digit = getDigit(numArray[j], i);
      digitsBucket[digit].push(numArray[j]);
    }

    numArray = [].concat(...digitsBucket);
  }

  return numArray;
}