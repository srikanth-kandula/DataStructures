/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

function numOfIslands(grid) {
  //explanation at
  // https://www.youtube.com/watch?v=pV2kpPD66nE
  if (!grid)
    return 0;
  let numOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") { // if it is a one, it is definetely an island, we need to connect all the land together
        dfs(grid, i, j);
        numOfIslands++;
      }
    }
  }

  return numOfIslands;
}

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || j >= grid[0].length || i >= grid.length || grid[i][j] !== "1") {
    return; // nothing to mark or we entered water
  }

  grid[i][j] = '#'; //mark with some value to indicate that it is visited
  dfs(grid, i + 1, j); //visit neighbor and then neighbor or neighbor, hence DFS
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}