const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  matrix = matrix.flat();
  for(let i = 0; i < matrix.length; i++)
  {
    sum += matrix[i] === "^^" ? 1 : 0;
  }
  return sum
};
