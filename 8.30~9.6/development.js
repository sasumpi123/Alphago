// 테스트 1 〉	통과 (1.82ms, 37.4MB)
// 테스트 2 〉	통과 (5.98ms, 37.3MB)
// 테스트 3 〉	통과 (1.74ms, 37.1MB)
// 테스트 4 〉	통과 (1.70ms, 37.3MB)
// 테스트 5 〉	통과 (1.80ms, 37.2MB)
// 테스트 6 〉	통과 (1.74ms, 37MB)
// 테스트 7 〉	통과 (1.70ms, 37.3MB)
// 테스트 8 〉	통과 (1.78ms, 37.3MB)
// 테스트 9 〉	통과 (1.77ms, 37.2MB)
// 테스트 10 〉	통과 (1.77ms, 37.4MB)
// 테스트 11 〉	통과 (1.73ms, 37.3MB)

function solution(progresses, speeds) {
    let answer = [];
    let days = [];
    let maxDue = Math.ceil((100 - progresses[0]) / speeds[0]);
    let count = 1;

    for (let index = 1; index < progresses.length; index++) {
        days[index] = Math.ceil((100 - progresses[index]) / speeds[index]);
        if (maxDue < days[index]) {
            answer.push(count);
            maxDue = days[index];
            count = 1;
        } else if (maxDue >= days[index]) {
            count++;
        }
    }
    answer.push(count);
    return answer;
}