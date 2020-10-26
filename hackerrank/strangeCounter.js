// 현타씨게옴
// 이수진갓;
function strangeCounter(t) {
  let time = 3;
  let num = 6;

  while (t > time) {
    time += num;
    num *= 2;
  }

  return time - t + 1;
}
