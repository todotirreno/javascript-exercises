const palindromes = function (str) {
  str = str.toLowerCase().match(/\w/g).join("");
  return str == Array.from(str).reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

str = "Racecar! mama";

console.log(
  str == Array.from(str.toLowerCase().match(/\w/g).join("")).reverse().join("")
);
