const sumAll = function (beginning, end) {
  if (!Number.isInteger(beginning) || !Number.isInteger(end)) return "ERROR";
  if (beginning < 0 || end < 0) return "ERROR";
  if (beginning > end) {
    let temp = beginning;
    beginning = end;
    end = temp;
  }
  let sum = 0;
  for (let i = beginning; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
