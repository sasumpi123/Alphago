// 테스트 1 〉	통과 (0.18ms, 30MB)
// 테스트 2 〉	통과 (0.20ms, 30MB)
// 테스트 3 〉	통과 (0.19ms, 30.1MB)
// 테스트 4 〉	통과 (0.18ms, 30.2MB)
// 테스트 5 〉	통과 (0.16ms, 30.1MB)
// 테스트 6 〉	통과 (0.20ms, 30.1MB)

function solution(input) {
    const deleteMax = (queue) => {
       if (queue.length == 0) {
         return undefined;
       } else {
         const max = Math.max.apply(null, queue);
         return queue.indexOf(max);
       }
     };
     const deleteMin = (queue) => {
       if (queue.length == 0) {
         return undefined;
       } else {
         const max = Math.min.apply(null, queue);
         return queue.indexOf(max);
       }
     };
     const queue = [];
     for (let i = 0; i < input.length; i++) {
       const command = input[i].split(" ")[0];
       const data = Number(input[i].split(" ")[1]);
       switch (command) {
         case "I":
           queue.push(data);
           break;
         case "D":
           const deleteIdx = data == 1 ? deleteMax(queue) : deleteMin(queue);
           if (deleteIdx != undefined) queue.splice(deleteIdx, 1);
           break;
       }
     }
     if(queue.length ==0) return [0,0]
     return [Math.max.apply(null, queue),Math.min.apply(null, queue)];
 }