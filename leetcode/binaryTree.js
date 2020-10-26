// Runtime    Memory
// 88ms       40.2MB

var diameterOfBinaryTree = function(root) {
    let answer = 0;
    const findMaxDepth = (node) => {
        if(node == null) return 0;
        let left = findMaxDepth(node.left);
        let right = findMaxDepth(node.right);
        answer = Math.max(answer, left+right);
        return Math.max(left,right)+1;
    }
    
    findMaxDepth(root);
    return answer;
};

