const removeFromArray = function (arr, ...elems) {
  let result = arr;
  for (let elem of elems) {
    result = result.filter((item) => item !== elem);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
