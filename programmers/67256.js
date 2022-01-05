// 테스트 1 〉	통과 (0.14ms, 30.4MB)
// 테스트 2 〉	통과 (0.22ms, 30.2MB)
// 테스트 3 〉	통과 (0.20ms, 30.1MB)
// 테스트 4 〉	통과 (0.12ms, 30.1MB)
// 테스트 5 〉	통과 (0.34ms, 30.3MB)
// 테스트 6 〉	통과 (0.27ms, 30.3MB)
// 테스트 7 〉	통과 (0.37ms, 30.2MB)
// 테스트 8 〉	통과 (0.40ms, 30.1MB)
// 테스트 9 〉	통과 (0.26ms, 30.2MB)
// 테스트 10 〉	통과 (0.26ms, 30.4MB)
// 테스트 11 〉	통과 (0.37ms, 30.1MB)
// 테스트 12 〉	통과 (0.30ms, 30.1MB)
// 테스트 13 〉	통과 (0.30ms, 30.4MB)
// 테스트 14 〉	통과 (0.39ms, 30.5MB)
// 테스트 15 〉	통과 (0.59ms, 30.2MB)
// 테스트 16 〉	통과 (0.56ms, 30.3MB)
// 테스트 17 〉	통과 (1.01ms, 30.5MB)
// 테스트 18 〉	통과 (0.87ms, 30.1MB)
// 테스트 19 〉	통과 (0.93ms, 30.4MB)
// 테스트 20 〉	통과 (0.91ms, 30.4MB)

function solution(numbers, hand) {
  var answer = "";
  const leftNum = [1, 4, 7];
  const rightNum = [3, 6, 9];
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const centerNumPadIdx = {
    2: 0,
    5: 1,
    8: 2,
    0: 3,
  };

  const getAnswerIfSameLine = () => {
    if (hand == "right") return "R";
    if (hand == "left") return "L";
  };

  const getHandCompareDistance = (targetNumIdx, currentLNum, currentRNum) => {
    const leftIdx = [];
    const rightIdx = [];
    const centerNumIdx = [targetNumIdx, 1];
    for (let idx = 0; idx < keyPad.length; idx++) {
      if (keyPad[idx].includes(currentLNum)) {
        leftIdx.push(idx);
        leftIdx.push(keyPad[idx].indexOf(currentLNum));
      }
      if (keyPad[idx].includes(currentRNum)) {
        rightIdx.push(idx);
        rightIdx.push(keyPad[idx].indexOf(currentRNum));
      }
      if (leftIdx.length > 0 && rightIdx.length > 0) break;
    }

    const leftDistance =
      Math.abs(centerNumIdx[0] - leftIdx[0]) +
      Math.abs(centerNumIdx[1] - leftIdx[1]);
    const rightDistance =
      Math.abs(centerNumIdx[0] - rightIdx[0]) +
      Math.abs(centerNumIdx[1] - rightIdx[1]);
    if (leftDistance == rightDistance) return getAnswerIfSameLine();
    const isLeftFar = leftDistance > rightDistance;
    return isLeftFar ? "R" : "L";
  };

  const getHandPressCenterNum = (targetNum, currentLNum, currentRNum) => {
    const onLeft = keyPad[centerNumPadIdx[targetNum]].includes(currentLNum);
    const onRight = keyPad[centerNumPadIdx[targetNum]].includes(currentRNum);
    if (onLeft && onRight) getAnswerIfSameLine();
    return getHandCompareDistance(
      centerNumPadIdx[targetNum],
      currentLNum,
      currentRNum
    );
  };

  let leftHandNum = "*";
  let rightHandNum = "#";
  for (let idx = 0; idx < numbers.length; idx++) {
    if (leftNum.includes(numbers[idx])) {
      leftHandNum = numbers[idx];
      answer += "L";
      continue;
    }

    if (rightNum.includes(numbers[idx])) {
      rightHandNum = numbers[idx];
      answer += "R";
      continue;
    }
    const currentHand = getHandPressCenterNum(
      numbers[idx],
      leftHandNum,
      rightHandNum
    );
    if (currentHand == "R") {
      rightHandNum = numbers[idx];
    } else {
      leftHandNum = numbers[idx];
    }

    answer += currentHand;
  }

  return answer;
}
