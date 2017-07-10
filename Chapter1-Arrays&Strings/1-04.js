/*jshint esversion: 6*/

// Given a string, write a function to check if it is a permutation of a palindrome.

const palPermut = (str) => {
  let chars = {};
  for (let character of str) {
    if (chars[character]) {
      delete chars[character];
    } else {
      chars[character] = true;
    }
  }
  return Object.keys(chars).length <= 1;
};
