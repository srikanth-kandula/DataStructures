class FrequencyCounter {

  areSame (base: number[], squared: Array<number> ): boolean {

    /**
     * examples are
     * +ve cases: [1,2,3],[1,4,9];   [1,1,4], [1,16,1];    [4,5,6],[1,16,25,36];  
     * -ve cases: [2,3,5],[4,9];    [2,3],[4,4,9];
     */

    /** steps:
     * 0) find the frequency of each unique value in base array
     * 1) For each unique value of base array square and compare with each value of squared array
     * 2) if match is not found exit loop and return false
     * 3) if match is found increment the count by 1.
     * 4) if frequency in squared array matches with that of base array element continue with next element, else exit and retunr false
     */

    /**main storage objects are
     * uniqueValuesOfBase - stores unique values and their frequencies
     */
    let uniqueValuesOfBase: { [index: number]: any} = [];

    for (let num of base) {
      uniqueValuesOfBase[num] = ++uniqueValuesOfBase[num] || 1;
    };

    for (let num in uniqueValuesOfBase) {
      for (let num2 of squared) {
        if (num == num2) {

        }
      }
    }

    return false;
  }

}