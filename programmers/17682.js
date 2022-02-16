function solution(dartResult) {
  const stack = [0];
  for (let idx = 0; idx < dartResult.length; idx++) {
    const value = dartResult[idx];
    if (isNaN(value) == false) {
      if (value == 0 && stack[stack.length - 1] == 10) continue;
      if (value == 1 && dartResult[idx + 1] == 0) {
        stack.push(10);
        continue;
      } else {
        stack.push(Number(value));
      }
    } else {
      const currentScore = stack.pop();
      const beforeScore = stack.pop();
      switch (value) {
        case "*":
          stack.push(beforeScore * 2);
          stack.push(currentScore * 2);
          break;
        case "#":
          stack.push(beforeScore);
          stack.push(currentScore * -1);
          break;
        case "S":
          stack.push(beforeScore);
          stack.push(currentScore);
          break;
        case "D":
          stack.push(beforeScore);
          stack.push(currentScore ** 2);
          break;
        case "T":
          stack.push(beforeScore);
          stack.push(currentScore ** 3);
          break;
      }
    }
  }
  return stack.reduce((partialSum, a) => partialSum + a, 0);
}

solution("10D10S0D");
