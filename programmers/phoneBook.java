// 정확성  테스트
// 테스트 1 〉	통과 (0.02ms, 53.1MB)
// 테스트 2 〉	통과 (0.02ms, 54.5MB)
// 테스트 3 〉	통과 (0.02ms, 52.2MB)
// 테스트 4 〉	통과 (0.03ms, 52.4MB)
// 테스트 5 〉	통과 (0.03ms, 53.3MB)
// 테스트 6 〉	통과 (0.02ms, 53.3MB)
// 테스트 7 〉	통과 (0.02ms, 52.8MB)
// 테스트 8 〉	통과 (0.02ms, 51.6MB)
// 테스트 9 〉	통과 (0.02ms, 52.2MB)
// 테스트 10 〉	통과 (0.03ms, 52.4MB)
// 테스트 11 〉	통과 (0.02ms, 51.8MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.23ms, 58.8MB)
// 테스트 2 〉	통과 (0.08ms, 56.2MB)


class Solution {
    public boolean solution(String[] phone_book) {
                 for(int i=0; i<phone_book.length; i++){
                for(int j=0; j<phone_book.length; j++){
                    if(i==j) continue;
                    else if (phone_book[i].startsWith(phone_book[j])){
                      return false;
                    }
                }
            }    
            return true;
    }
}