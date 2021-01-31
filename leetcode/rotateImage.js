// Runtime: 68 ms, faster than 99.06% of JavaScript online submissions for Rotate Image.
// Memory Usage: 38.9 MB, less than 34.04% of JavaScript online submissions for Rotate Image.
var rotate = function(matrix) {
    const n = matrix.length
      
      for(let i=0; i<n; i++ ){
          for(let j=i; j<n; j++){
              let temp = matrix[i][j]
              matrix[i][j] = matrix[j][i]
              matrix[j][i] = temp
          }
      }
      
      matrix.forEach((row) => row = row.reverse())
  };