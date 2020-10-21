// 테스트 1 〉	통과 (0.11ms, 29.8MB)
// 테스트 2 〉	통과 (0.08ms, 29.9MB)
// 테스트 3 〉	통과 (0.12ms, 29.9MB)
// 테스트 4 〉	통과 (0.12ms, 30MB)
// 테스트 5 〉	통과 (0.12ms, 30.1MB)
// 테스트 6 〉	통과 (0.12ms, 29.9MB)
// 테스트 7 〉	통과 (0.13ms, 30.1MB)
// 테스트 8 〉	통과 (0.13ms, 30.2MB)
// 테스트 9 〉	통과 (0.12ms, 30MB)
// 테스트 10 〉	통과 (0.12ms, 30.1MB)
// 테스트 11 〉	통과 (0.13ms, 30MB)
// 테스트 12 〉	통과 (0.14ms, 30.1MB)
// 테스트 13 〉	통과 (0.13ms, 30MB)
// 테스트 14 〉	통과 (0.13ms, 29.8MB)

function solution(skill, skill_trees) {
  var answer = skill_trees.length;
  for (let i = 0; i < skill_trees.length; i++) {
    let checkAry = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.indexOf(skill_trees[i].charAt(j)) != -1) {
        checkAry.push(skill_trees[i].charAt(j));
      }
    }

    for (let k = 0; k < checkAry.length; k++) {
      if (checkAry[k] != skill.charAt(k)) {
        answer--;
        break;
      }
    }
  }

  return answer;
}
