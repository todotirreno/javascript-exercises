const reverseString = function (string) {
  let arr = string.split("");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) result += arr[i];
  return result;
};

// Do not edit below this line
module.exports = reverseString;
