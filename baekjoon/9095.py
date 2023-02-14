n = int(input())

nList = []

for i in range(n):
  nList.append(int(input()))

d = [0] * (max(nList) + 1)
d[1] = 1
d[2] = 2
d[3] = 4
for i in range(4,max(nList) + 1):
  d[i] = d[i - 1] + d[i - 2] + d[i - 3]

for i in range(len(nList)):
  print(d[nList[i]])



