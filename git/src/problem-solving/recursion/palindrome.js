function isPalindrome (str) {

  if (str.length % 2 !== 0) {
    if (str.length === 1) {
      return true;
    }
    if (str[0] === str.slice(-1)) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  } else {
    return false;
  }

}
