/**
 * @description checks if the second array has equal `frequency` of squared values for respective values in first array
 * @param {Array} base initial array of digits
 * @param {Array} squared array of digits with values as squared numbers of initial array
 * @returns {boolean} true if matched, else false
 * 
 * @example matches [1,2,3] [1,4,6]; [1,1,6], [1,36,1]; 
 *          non-matches  [2,4,5] [4,4,16,25]; [2,3,6] [4,9]
 */

function areMatch(base, squared) {
  let result = false;

  if (base.length === squared.length) {
    let uniqueValuesInBase = {};
    let uniqueValuesInSquared = {};

    for (const value of base) {
      uniqueValuesInBase[value] = ++uniqueValuesInBase[value] || 1;
    }
    for (const value of squared) {
      uniqueValuesInSquared[value] = ++uniqueValuesInSquared[value] || 1;
    }
    let matched = false;
    for (const key in uniqueValuesInBase) {
      if (uniqueValuesInSquared.hasOwnProperty(key * key)) {
        if (uniqueValuesInBase[key] === uniqueValuesInSquared[key * key]) {
          matched = true;
        } else {
          matched = false;
          break;
        }
      } else {
        matched = false;
        break;
      }
    }

    if (matched) {
      result = true;
    }

  }

  return result;
}
