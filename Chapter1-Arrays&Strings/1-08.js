/*jshint esversion: 6*/

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const zeroOut = (matrix) => {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  const nullifyRow = (row) => row.fill(0);
  const nullifyCol = (col) => matrix.forEach(row => row[col] = 0);

  for (let j=0; j<matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
  for (let i=0; i<matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  for (let i = 1; i<matrix.length; i++) {
    for (let j = 1; j<matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i=1; i<matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix[i]);
    }
  }
  for (let j=1; j<matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      nullifyCol(j);
    }
  }
  if (firstRowHasZero) {
    nullifyRow(matrix[0]);
  }
  if (firstColHasZero) {
    nullifyCol(0);
  }
  return matrix;
};