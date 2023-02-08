d = [0] * 100

# 탑다운
def pibo(x):
  print('f(' + str(x) + ')', end=' ')
  if x == 1 or x == 2:
    return 1
  if d[x] != 0:
    return d[x]
  d[x] = pibo(x - 1) + pibo(x - 2)
  return d[x]

pibo(6)

def piboB():
  d[1] = 1
  d[2] = 1
  n = 10

  for i in range(3, n + 1):
    d[i] = d[i - 1] + d[i - 2]
    print(i, d[i])
    
  

piboB()