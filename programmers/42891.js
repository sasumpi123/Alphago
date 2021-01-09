// 정확성: 42.9
// 효율성: 57.1
// 합계: 100.0 / 100.0

function solution(food_times, k) {    
    const length = food_times.length;
        
    const foodTimesAry = food_times.map((time, idx) => {
        return {idx:idx+1, time};
        }).sort((a,b) => {
        return a.time - b.time;
    });
        
    for (let idx = 0; idx < length ; idx++) {
        const aryTime = foodTimesAry[idx].time; 
        const leftTime = length - idx; 
        const time = (aryTime - (idx == 0 ? 0 : foodTimesAry[idx-1].time)) * leftTime; 
        
        if (k < time) {
            return foodTimesAry.slice(idx).sort((a,b) => a.idx - b.idx)[k % leftTime].idx;
        }
        k -= time; 
    }
    
    return -1;
}
