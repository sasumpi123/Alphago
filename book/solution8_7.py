d = [0] * 1001

n = 10

d[0] = 1
d[1] = 3
for i in range(3, n):
  d[i] = (d[i - 1] + 2 * d[i - 2]) % 796796

print(d[n])
  
  
  