/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function () {
  let num1 = "123456789";
  let num2 = "987654321";
  
  const res = "121932631112635269";
  const parseAry_1 = makePareNumAry(num1);
  const parseAry_2 = makePareNumAry(num2);
  console.error(parseAry_1);
  console.error(parseAry_2);
  for (var idx in parseAry_2) {
    console.error(parseAry_2[idx]);
  }
};
var makePareNumAry = function (num) {
  const parseAry = [];
  if (num.length > 7) {
    for (let i = 0; i < num.length / 7; i++) {
      if ((i + 1) * 7 > num.length) {
        parseAry.push(num.substr(i * 7, 7));
      } else {
        parseAry.push(num.substr(i * 7, 7));
      }
    }
  } else {
    parseAry.push(num);
  }
  return parseAry;
};

multiply();
