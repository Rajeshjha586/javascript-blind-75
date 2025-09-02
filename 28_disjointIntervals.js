const compareSecondElement = (a, b) => a[1] - b[1];

function disjointIntervals(intervals) {
  // Sort Intervals by the second element
  intervals.sort(compareSecondElement);

  // Initialize answer to count overlaps and k to track the end of the last interval
  let ans = 0;
  let k = Number.MIN_SAFE_INTEGER;

  // Iterate through the intervals
  for (const interval of intervals) {
    const x = interval[0];
    const y = interval[1];

    if (x >= k) {
      // Case 1: No overlap, update k to the end of the current interval
      k = y;
    } else {
      // Case 2: Overlap, increment the answer
      ans++;
    }
  }

  // Return the number of overlaps
  return ans;
}
