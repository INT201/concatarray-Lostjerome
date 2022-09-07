const { template } = require("@babel/core");

function concatArray(array1, array2) {
  return array1 && array2
    ? array1.concat(array2)
    : !array1 && !array2
    ? undefined
    : array1 || array2;
}
module.exports = concatArray;
