/*jshint esversion: 6*/

// Given two strings, write a method to decide if one is a permutation of the other

const isPermutation = (strA,strB) => {
  if (strA.length !== strB.length) {
    return false;
  }
  let chars = new Map();
  for (let character of strA) {
    chars.set(character, chars.get(character)+1 || 1);
  }
  for (let character of strB) {
    let count = chars.get(character);
    if (!count) {
      return false;
    }
    if (count === 1) {
      chars.delete(character);
    } else {
      chars.set(character, count-1);
    }
  }
  return chars.size === 0;
}