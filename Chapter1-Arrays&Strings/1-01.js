/*jshint esversion: 6*/

// Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

const unique = (str) => {
  if (str.length > 128) {return false;}
  let chars = new Set(str);
  return chars.size === str.length;
};

const unique = (str) => {
  let sorted = str.split('').sort();
  for (let i=0; i<sorted.length; i++) {
    if (sorted[i+1] === sorted[i]) {
      return false;
    }
  }
  return true;
};