/**
 * @param {number} num
 * @return {number}
 */
function countOnesInBinary(num) {
  //Count the number of set bits using brian kernighan's algorithm
  let count = 0;
  while (num !== 0) {
    //Check the least significant bit whether it is set bit and update the counting result
    count += num & 1; //Unsigned right shift by 1 bit
    num >>>= 1;
  }

  return count;
}
