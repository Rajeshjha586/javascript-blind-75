/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */

function mostCommonElements(numbers, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of numbers) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}

// function mostCommonElements(numbers, k) {
//   // Frequency counter
//   let freqs = {};
//   for (let num of numbers) {
//     if (freqs[num] === undefined) {
//       freqs[num] = 1;
//     } else {
//       freqs[num] = freqs[num] + 1;
//     }
//   }

//   // Convert to array with [frequency, number] elements
//   let frequencyArray = [];
//   for (let key in freqs) {
//     frequencyArray.push([freqs[key], key]);
//   }

//   // Sort in descending order with frequency as key
//   frequencyArray.sort((a, b) => {
//     return b[0] - a[0];
//   });

//   // Get most frequent element out of array
//   let mostFreq = [];
//   for (let i = 0; i < k; i++) {
//     mostFreq.push(Number(frequencyArray[i][1]));
//   }

//   return mostFreq;
// }
