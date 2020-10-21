function solution() {
  const ary = [];
  var answer = 0;
  //   3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

  if (cacheSize == 0) return cities.length * 5;

  ary.push(cities[0].toLowerCase());
  answer += 5;
  for (let i = 1; i < cities.length; i++) {
    if (ary.length < cacheSize) {
      if (ary.indexOf(cities[i].toLowerCase()) == -1) {
        ary.push(cities[i].toLowerCase());
        answer += 5;
      } else {
        answer++;
      }
    } else {
      if (ary.indexOf(cities[i].toLowerCase()) == -1) {
        ary.pop();
        ary.push(cities[i].toLowerCase());
        answer += 5;
      } else {
        answer++;
      }
    }
  }

  return answer;
}

solution();
