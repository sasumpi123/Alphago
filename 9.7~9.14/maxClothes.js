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



solution(5, [3,4], [1,3,5]);