const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix=matrix.flat(10);
  matrix=matrix.filter((item)=>(item == `^^`));
  return matrix.length;
};
