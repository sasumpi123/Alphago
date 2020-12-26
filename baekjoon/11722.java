// 문제 번호	결과	    메모리	시간		언어	    코드 길이	
// 11722	맞았습니다!!	21284	352	  Java 11 / 수정	553	
import java.util.*;

public class Main {
	
	public static void main(String[] args)   {
		Scanner sc = new Scanner(System.in);
		
		int n=sc.nextInt();
		int[] dp = new int[n+1];
		int[] arr = new int[n+1];
		
		for(int i=1;i<=n;i++) {
			arr[i] = sc.nextInt();
		}

		dp[n] =1; 
		
		for(int i=n-1;i>0;i--) { 
			dp[i] =1;
			for(int j=n;j>0;j--) {
				if(arr[i]>arr[j]) {
					dp[i] = Math.max(dp[i], dp[j]+1);
				}
			}
		}
		
		int max = 0;
		for(int i=1;i<=n;i++) {
			if(dp[i]>max) {
				max = dp[i];
			}
		}
		System.out.println(max);
	}
	
}