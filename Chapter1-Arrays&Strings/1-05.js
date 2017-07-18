/*jshint esversion: 6*/

// There are three types of edits that can be performed on strings: insert a character, remove a character, or replacea character.  Given two strings, write a function to check if they are one edit (or zero edits) away.

const checkEdits = (strA,strB) => {
  if (Math.abs(strA.length-strB.length) > 1) {
    return false;
  }
  let isEdited = false;
  let i = 0;
  let j = 0;
  while (i<strA.length && j<strB.length) {
    if (strA[i] !== strB[j]) {
      if (isEdited) {
        return false;
      }
      if (strA.length<strB.length) {
        i--;
      } else if (strA.length>strB.length) {
        j--;
      }
      isEdited = true;
      i++;
      j++;
    }
  }
  return true;
};
