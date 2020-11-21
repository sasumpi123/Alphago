// 테스트 1 〉	통과 (21.78ms, 33MB)
// 테스트 2 〉	통과 (4.62ms, 33MB)
// 테스트 3 〉	통과 (4.70ms, 33.1MB)
// 테스트 4 〉	통과 (4.47ms, 33MB)
// 테스트 5 〉	통과 (4.57ms, 33MB)
// 테스트 6 〉	통과 (0.20ms, 30MB)
// 테스트 7 〉	통과 (4.60ms, 32.9MB)
// 테스트 8 〉	통과 (4.56ms, 33MB)
// 테스트 9 〉	통과 (0.82ms, 30.1MB)
// 테스트 10 〉	통과 (4.91ms, 33.1MB)
// 테스트 11 〉	통과 (0.12ms, 30MB)
// 테스트 12 〉	통과 (0.14ms, 30.1MB)
// 테스트 13 〉	통과 (0.14ms, 30.2MB)
// 테스트 14 〉	통과 (0.13ms, 30.1MB)
// 테스트 15 〉	통과 (0.14ms, 30MB)
// 테스트 16 〉	통과 (0.12ms, 30.1MB)
// 테스트 17 〉	통과 (0.13ms, 30.1MB)
// 테스트 18 〉	통과 (0.12ms, 30.2MB)
// 테스트 19 〉	통과 (0.11ms, 30.1MB)
// 테스트 20 〉	통과 (0.10ms, 29.8MB)

function solution(jobs){
    let count = jobs.length;
    let totalTime = 0; 
    let nowTime = 0; 
    const queue = []; 

    while(true) {
        let idx = 0;
        while(true) {
            if (idx >= jobs.length) break;
            if (jobs[idx][0] <= nowTime) queue.push(jobs.splice(idx,1)[0]);            
            else idx += 1;
        }
        if (queue.length == 0) {
            if (jobs.length == 0) break;             
            else nowTime += 1;            
        }else { 
            let minIdx = 0;
            for(let i = 1; i < queue.length; i ++) {
                if (queue[minIdx][1] > queue[i][1]) minIdx = i;                                      
            }            
            nowTime += queue[minIdx][1]; 
            totalTime += nowTime - queue[minIdx][0]; 
            queue.splice(minIdx, 1); 
        }
    }
    return Math.floor(totalTime/count);
}