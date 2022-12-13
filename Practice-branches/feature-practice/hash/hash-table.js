class HashTable {

  constructor(size = 71) { // If arrayLength is prime value, number of collisions would reduce drastically
    this.keyValuesMap = new Array(size);
  }

  /**
   * A function that hashes a given string
   * @param {*} key 
   * @param {*} arrayLength 
   */
  hash(key) {
    let primeNumber = 31; // Prime numbers reduce collisions
    let hashValue = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) { // to keep time complexity low
      let charValue = key[i].charCodeAt(0) - 96;
      hashValue = (hashValue * primeNumber + charValue) % this.keyValuesMap.length; // radomize or better distribution of hash value within range
    }

    return hashValue;
  }

  set(key, value) {
    let keyHash = this.hash(key);

    if (!this.keyValuesMap[keyHash]) {
      this.keyValuesMap[keyHash] = [];
    }
    this.keyValuesMap[keyHash].push([key, value]); // separate chaining
  }

  get(key) {
    let result;
    let keyHash = this.hash(key);
    let value = this.keyValuesMap[keyHash];

    if (value) {
      for (let i = 0; i < value.length; i++) {
        let kvPair = value[i];
        if (kvPair[0] === key) {
          result = kvPair[1];
          break;
        }
      }
    }

    return result;
  }

  keys() {
    let result = [];

    if (this.keyValuesMap.length) {
      for (let i = 0; i < this.keyValuesMap.length; i++) {
        let value = this.keyValuesMap[i];

        if (value) {
          for (let i = 0; i < value.length; i++) {
            let kvPair = value[i];
            if (!result.includes(kvPair[0]))
              result.push(kvPair[0]);
          }
        }
      }
    }

    return result;
  }

  values() {
    let result = [];

    if (this.keyValuesMap.length) {
      for (let i = 0; i < this.keyValuesMap.length; i++) {
        let value = this.keyValuesMap[i];

        if (value) {
          for (let i = 0; i < value.length; i++) {
            let kvPair = value[i];
            if (!result.includes(kvPair[1]))
              result.push(kvPair[1]);
          }
        }
      }
    }

    return result;
  }

}