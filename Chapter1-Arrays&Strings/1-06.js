/*jshint esversion: 6*/

// Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string "aabcccccaaa" would become "a2b1c5a3."  If the compressed string would not become smaller than the original string, your method should return the original string.  You can assume the string has only uppercase and lowercase letters (a-z).

const compressor = (string) => {
  let output = '';
  let current = string[0];
  let count = 1;
  for (let i=1; i<string.length; i++) {
    if (string[i] === current) {
      count++;
    } else {
      output += current + count;
      current = string[i];
      count = 1;
    }
    if (i === string.length-1) {
      output += current + count;
    }
  }
  if (!output.length) {
    output += current + count;
  }
  return output.length>=string.length ? string : output;
};
