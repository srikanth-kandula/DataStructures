/**
 * @description checks if the second array has equal `frequency` of squared values for respective values in first array
 * @param {Array} base initial array of digits
 * @param {Array} squared array of digits with values as squared numbers of initial array
 * @returns {boolean} true if matched, else false
 *
 * @example matches [1,2,3] [1,4,6]; [1,1,6], [1,1,36];
 *          non-matches  [2,4,5] [4,4,16,25]; [2,3,6] [4,9]
 */

function areMatch(base, squared) {

  var uniqueValuesInBase = {};
  var squaredValues = {};
  var result = true;
  base.forEach(element => {
    uniqueValuesInBase[element] = ++uniqueValuesInBase[element] || 1;
  });

  Object.keys(uniqueValuesInBase).forEach(element => {
    squared.forEach(element2 => {
      if (element * element == element2) {
        squaredValues[element] = ++squaredValues[element] || 1;
      }
    });
    if (uniqueValuesInBase[element] !== squaredValues[element]) {
      result = false;
    }
  });

  return result;
}