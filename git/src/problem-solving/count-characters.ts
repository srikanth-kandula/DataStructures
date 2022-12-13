class CountCharacters {

  countCharacters(str: string): object {
    let result: { [index: string]: any } = {};
    console.log(`str: ${str}`);
    for (let char of str) {
      console.log(`char: ${char}`);

      char = char.toLowerCase();
      if (this.isValidChar(char)) {
        result[char] = ++result[char] || 1;
      }
    }
    console.log(JSON.stringify(result));
    return result;
  }

  private isValidChar(char: string): boolean {

    /*
    let alphaNumeric = new RegExp('^[a-z0-9]+$');
    return alphaNumeric.test(char);
    */

    /*faster as simple boolean comparisions are involved*/
    let charAsciCode = char.charCodeAt(0);
    console.log(`charAsciCode: ${charAsciCode}`);

    let isValidChar = false;
    if ((charAsciCode > 47 && charAsciCode < 58) || (charAsciCode > 96 && charAsciCode < 123)) {
      isValidChar = true;
    }
    console.log(`isValidChar: ${isValidChar}`);
    return isValidChar;

  }

}

const countCharacters = new CountCharacters();
countCharacters.countCharacters('Hi! I am a String!$');