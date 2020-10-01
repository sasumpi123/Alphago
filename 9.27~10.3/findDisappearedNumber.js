// Runtime    Memory
// 128 ms	    49.1 MB
var findDisappearedNumbers = function (nums) {
  const temp = [];

  nums.map((e) => {
    temp[e - 1] = true;
  });
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (temp[i] == undefined) {
      res.push(i + 1);
    }
  }

  return res;
};
