
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnIndex = i % 2 === 0
          ? j
          : (matrix[i].length - j - 1);
        result.push(matrix[i][columnIndex]);
      }
      
    };
    
  };
  return result;
};
