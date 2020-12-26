// 	문제 번호	결과	        메모리	    시간	    언어	    코드 길이	
//  10844	  맞았습니다!!	    14812	    144	    Java 11 / 수정	952	

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main{
    public static void main(String args[])throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        long dp[][] = new long[n+1][10];
        long mod = 1000000000;
        for (int i = 1; i <=9; i++){
            dp[1][i] = 1;
        }
        for (int i = 2; i <= n; i++){
            for (int j = 0; j <= 9; j++){
                dp[i][j] = 0;
                if (j > 0){
                    dp[i][j] += dp[i-1][j-1];
                }
                if (j < 9){
                    dp[i][j] += dp[i-1][j+1];
                }
                dp[i][j] %= mod;
            }
        }
        long res = 0;
        for (int i = 0; i <= 9; i++){
            res += dp[n][i];
        }
        System.out.println(res%mod);
    }
}