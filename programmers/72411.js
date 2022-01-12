function solution(orders, course) {
  var answer = Array.from({ length: course.length }, () => "");

  const menuObj = {};
  const orderCom = [];
  for (let idx = 0; idx < orders.length; idx++) {
    orderCom.push(orders[idx].length);
  }
  for (let idx = 0; idx < course.length; idx++) {
    if (orderCom.indexOf(course[idx]) == orderCom.lastIndexOf(course[idx]))
      course.splice(idx, 1);
  }
  // 주문 조합
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i].split("");
    for (let j = 0; j < order.length; j++) {
      if (menuObj[order[j]] == undefined)
        menuObj[order[j]] = { count: 0, include: [] };
      menuObj[order[j]].include.push(i);
      menuObj[order[j]].count = menuObj[order[j]].include.length;
    }
  }

  for (let idx = 0; idx < course.length; idx++) {
    for (const key in menuObj) {
    }
  }

  console.error(menuObj);

  return answer;
}
// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	[["ACD", "AD", "ADE", "CD", "XYZ"]

solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
// 0 5
// 1 2
// 2 2
// 3 3
// 4 3
// 5 3
// 6 3
