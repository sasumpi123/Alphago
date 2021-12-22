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

  const getHandCompareDistance = (
    targetNumIdx,
    currentLNum,
    currentRNum,
    targetNum
  ) => {
    let leftIdx = undefined;
    let rightIdx = undefined;
    for (let idx = 0; idx < keyPad.length; idx++) {
      if (keyPad[idx].includes(currentLNum)) {
        leftIdx = idx;
      }
      if (keyPad[idx].includes(currentRNum)) {
        rightIdx = idx;
      }
      if (leftIdx && rightIdx) break;
    }

    console.error(
      "targetNum: ",
      targetNum,
      "targetNumIdx: ",
      targetNumIdx,
      "currentLNum: ",
      currentLNum,
      "leftIdx: ",
      leftIdx,
      "currentRNum: ",
      currentRNum,
      "rightIdx: ",
      rightIdx
    );
    if (leftIdx == rightIdx) return getAnswerIfSameLine();
    else {
      const leftDistance =
        targetNumIdx == leftIdx ? 1 : Math.abs(targetNumIdx - leftIdx);
      const rightDistance =
        targetNumIdx == rightIdx ? 1 : Math.abs(targetNumIdx - rightIdx);

      console.error(
        "leftDistance: ",
        leftDistance,
        "rightDistance: ",
        rightDistance
      );
      if (leftDistance == rightDistance) return getAnswerIfSameLine();
      return leftDistance > rightDistance ? "R" : "L";
    }
  };

  const getHandPressCenterNum = (targetNum, currentLNum, currentRNum) => {
    const onLeft = keyPad[centerNumPadIdx[targetNum]].includes(currentLNum);
    const onRight = keyPad[centerNumPadIdx[targetNum]].includes(currentRNum);
    if (onLeft && onRight) getAnswerIfSameLine();
    return getHandCompareDistance(
      centerNumPadIdx[targetNum],
      currentLNum,
      currentRNum,
      targetNum
    );
  };

  let leftHandNum;
  let rightHandNum;
  for (let idx = 0; idx < numbers.length; idx++) {
    console.error(
      "targetNum: ",
      numbers[idx],
      "left: ",
      leftHandNum,
      "right: ",
      rightHandNum
    );
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

  console.error("13458214595");
  console.error("LRLLLRLLRRL");
  console.error(`${answer}`);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
