// Runtime     Memory
// 80 ms	    38.9 MB

var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + (right < left ? left : right);
};
