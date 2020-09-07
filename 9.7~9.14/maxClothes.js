// 테스트 1 〉	통과 (3.48ms, 29.7MB)
// 테스트 2 〉	통과 (3.71ms, 29.9MB)
// 테스트 3 〉	통과 (3.76ms, 29.8MB)
// 테스트 4 〉	통과 (3.85ms, 29.9MB)
// 테스트 5 〉	통과 (3.76ms, 29.7MB)
// 테스트 6 〉	통과 (3.18ms, 29.6MB)
// 테스트 7 〉	통과 (3.77ms, 29.8MB)
// 테스트 8 〉	통과 (3.73ms, 30MB)
// 테스트 9 〉	통과 (3.58ms, 30MB)
// 테스트 10 〉	통과 (3.65ms, 29.7MB)
// 테스트 11 〉	통과 (3.17ms, 29.7MB)
// 테스트 12 〉	통과 (3.13ms, 29.6MB)

function solution(n, lost, reserve) {
    var answer = 0;
    let student = new Map();
    const max = n;
    
    for(let i=1; i<=n; i++){
        student.set(i,1);
    }
    
    for(let i=0; i<reserve.length; i++){
        student.set(reserve[i], student.get(reserve[i])+1);
    }

    for(let i=0; i<lost.length; i++){
        student.set(lost[i], student.get(lost[i])-1);
    }
    
    student.forEach(function(value,key){
        if(value>=1){
            answer++;
            student.set(key, student.get(key)-1);
        }else if(value==0){
            if((key>=2)&&student.get(key-1)>0){
                student.set(key-1, student.get(key-1)-1);
                answer++;
            }else if(((key+1)<=max)&&student.get(key+1)==2){
                student.set(key+1, student.get(key+1)-1);
                answer++;
            }
        }
    })
    
    return answer;
}
