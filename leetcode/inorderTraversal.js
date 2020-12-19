// Runtime: 72 ms, faster than 93.34% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 38.7 MB, less than 55.94% of JavaScript online submissions for Binary Tree Inorder Traversal.
var inorderTraversal = root => {
    const res = [];
    const getNode = node => {
        if (!node) return;
        getNode(node.left);
        res.push(node.val);
        getNode(node.right);
    }
    getNode(root);
    return res;
};