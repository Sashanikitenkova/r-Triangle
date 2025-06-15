// r Triangle
// We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

let rTriangle = function(rows){
  if (rows === 0) {
    return 0; 
  } else{
    return rows + rTriangle(rows-1)
   }
 }

console.log(rTriangle(3)); // should give 0
// console.log(rTriangle(1)); // should give 1
// console.log(rTriangle(2)) // should give 3



// rows       result 
// 3           3+rTriangle(2)
//             3+2+rTriangle(1)
//             3+2+1 = 6