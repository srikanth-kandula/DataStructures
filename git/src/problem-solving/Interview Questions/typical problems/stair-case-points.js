/**
 * Two stair cases of same length connect two points, each step on each of the staircases is assigned with some points.
 * If a person has to reach the destination using the stair cases, find the maximum score he can score while climbing.
 * He is allowed to only climb and only one step at a time, he can switch between stair cases as many times as he want.
 * For each switch/transition, he will lose a fixed number of points, say 10
 * 
 * The below solution has worst case
 *      time complexity = O(n(n-1)) = O(n^2 - n) = O(n^2)
 *      space complexity = O(n-1) = O(n)
 */

console.clear();

function findWealthyPath(A, B) {
  let transitionCost = 10;
  let typicalPath = 0;
  let counter = 0;
  let allPaths = {};
  let currentPath, alternatePath, wealthyPath;

  if (A[0] >= B[0]) {
    currentPath = A;
    alternatePath = B;
  } else {
    currentPath = B;
    alternatePath = A;
  }

  typicalPath += currentPath[0];
  allPaths[counter] = { path: A, val: A[0] };
  allPaths[++counter] = { path: B, val: B[0] };

  for (let i = 1; i < A.length; i++) {
    if (alternatePath[i] > currentPath[i] + transitionCost) {
      [currentPath, alternatePath] = [alternatePath, currentPath];
      counter++;
      allPaths[counter] = { path: currentPath, val: typicalPath - transitionCost };
      typicalPath += currentPath[i] - transitionCost;
      updateAllPaths(allPaths, i);
    } else {
      updateAllPaths(allPaths, i);
    }
  }

  console.log(allPaths);

  wealthyPath = typicalPath;
  for (let property in allPaths) {
    let path = allPaths[property];
    if (path.val > wealthyPath) {
      wealthyPath = path.val;
    }
  }

  return wealthyPath;
}

function updateAllPaths(allPaths, i) {
  for (let property in allPaths) {
    let path = allPaths[property];
    path.val += path.path[i];
  }
}

A = [10, 20, 0, 40, 100, 20];
B = [20, 10, 0, 20, 90, 10];
C = [10, 40, 40, 80, 90, 130, 130, 130, 130, 130];
D = [20, 20, 60, 60, 110, 120, 120, 120, 120, 120];
findWealthyPath(C, D);