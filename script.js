/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
    let height = A.length;
    let width = A[0].length;
    let topAndBottom = height * width * 2;
    let sides = 0;
    let faces = 0;

    for (let i = 0; i < height; i++) {
        let tempHeight = 0;
        for (let j = 0; j < width; j++) {
            if (A[i][j] > tempHeight) {
                sides += A[i][j] - tempHeight;
            }
            tempHeight = A[i][j];
        }
    }

    for (let i = 0; i < width; i++) {
        let tempHeight = 0;
        for (let j = 0; j < height; j++) {
            if (A[j][i] > tempHeight) {
                faces += A[j][i] - tempHeight;
            }
            tempHeight = A[j][i];
        }
    }

    return topAndBottom + (sides * 2) + (faces * 2);
}

//////////////////////////////////////////////////////////////////////////
function surfaceArea(A) {
  let area = 0;
  for (let i = 0; i < A.length; i++) {
    // top and bottom of row 
    area += A[i].length * 2

    for (let j = 0; j < A[i].length; j++) {
      // front face
      if (i === 0) area += A[i][j];
      else if (A[i][j] > A[i - 1][j]) area += (A[i][j] - A[i - 1][j]);

      // sides left
      if (j === 0) area += A[i][j];
      else area += Math.abs(A[i][j - 1] - A[i][j]);
      // side far end (right)
      if (j === A[i].length - 1) area += A[i][j];

      // back faces
      if (i === A.length - 1) area += A[i][j];
      else if (A[i][j] > A[i + 1][j]) area += (A[i][j] - A[i + 1][j]);
    }
  }
  return area
}
