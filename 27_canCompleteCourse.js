/**
 * @param {number[]} courses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canCompleteCourse(courses, prerequisites) {
  const indegree = new Array(courses).fill(0);
  const adj = new Array(courses).fill(0).map(() => []);

  // Build the adjacency list and the indegree array
  for (const prerequisite of prerequisites) {
    adj[prerequisite[1]].push(prerequisite[0]);
    indegree[prerequisite[0]]++;
  }

  const queue = [];
  // Push all the nodes with indegree zero into the queue.
  for (let i = 0; i < courses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let nodesVisited = 0;
  // Process the queue
  while (queue.length > 0) {
    const node = queue.shift();
    nodesVisited++;

    for (const neighbor of adj[node]) {
      // Decrease the indegree of the neighbor
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If we visited all the courses, return true
  return nodesVisited === courses;
}
