t = int(input())


dp = [0] * 41

dp[0] = 0
dp[1] = 1
dp[2] = 1
for i in range(3, 41):
  dp[i] = dp[i - 1] + dp[i - 2]

for i in range(t):
  n = int(input())
  if n == 0:
    print('1 0')
  elif n == 1:
    print('0 1')
  else:
    print(str(dp[n - 1]) + " " + str(dp[n]))


