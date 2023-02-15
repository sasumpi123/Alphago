# 1층 1호 = 1
# 1층 2호 =  3
# 1층 3호 =  6
# 1층 4호 = 10

# 2층 1호 =  1
# 2층 2호 = 4
# 2층 3호 = 10
# 2층 4호 = 20

# 3층 1호 =  1
# 3층 2호 =  5
# 3층 3호 = 15
# 3층 4호 = 35




t = int(input())

for i in range(t):
  k = int(input())
  n = int(input())

  if n == 1:
    print(1)
    continue
  if n == 2:
    print(k + 2)
    continue

  d = [[i for i in range(15)]] * (k + 1)
  for i in range(k):
    for j in range(1, 15):
      d[i][j] = d[i][j - 1] + d[i - 1][j]
  
  print(d[k][n])


  



