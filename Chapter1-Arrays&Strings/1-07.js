/*jshint esversion: 6*/

// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.  Can you do this in place?

const rotator = (matrix) => {
  if (!matrix.length || matrix[0].length !== matrix.length) {
    return false;
  }
  for (let i=0; i<~~(matrix.length/2); i++) {
    let first = i;
    let last = matrix.length-i-1;
    for (let j = first; j<last; j++) {
      let offset = j-first;
      let top = matrix[first][j]; // save top
      matrix[first][j] = matrix[last-offset][first]; // left -> top
      matrix[last-offset][first] = matrix[last][last-offset]; // bottom -> left
      matrix[last][last-offset] = matrix[j][last]; // right -> bottom
      matrix[j][last] = top; // top -> right
    }
  }
  return matrix;
};

// not done in place

const rotator = (matrix) => {
  if (!matrix.length || matrix[0].length !== matrix.length) {
    return false;
  }
  let result = [];
  matrix.forEach((value,i) => {
    let temp = [];
    for (let j=matrix.length-1; j>=0; j--) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  });
  return result;
}