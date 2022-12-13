/**
 * Implementation of Graph using adjacency list
 * Error handling is ignored
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex].length)
      this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      const adjacentVertex = this.adjacencyList[vertex][i];
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.deleteEdge(vertex1, vertex2);
    this.adjacencyList[vertex2] = this.deleteEdge(vertex2, vertex1);

    //or

    /** 
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    */
  }

  deleteEdge(vertex1, vertex2) {
    let result = [];
    let vertexValue = this.adjacencyList[vertex1];
    for (let i = 0; i < vertex1.length; i++) {
      let value = vertexValue.pop();
      if (value !== vertex2) {
        result.push(value);
      }
    }

    return result;
  }

  DFS_Recursive(vertex) {
    var visitedVertices = {};
    var result = [];
    var adjacencyList = this.adjacencyList;
    result = DFS(vertex);

    function DFS(vertex) {
      if (!vertex)
        return null;
      else {
        result.push(vertex);
        visitedVertices[vertex] = true;

        let neighbors = adjacencyList[vertex];
        for (let i = 0; i < neighbors.length; i++) {
          if (!visitedVertices[neighbors[i]]) {
            DFS(neighbors[i]);
          }
        }
      }

      return result;
    }

    return result;
  }

  /*Depth First Traversal/Search – Pick a vertex as root, visit a neighbor,
  and then visits the neighbor’s neighbors instead of visiting all the neighbors of root first*/

  depthFirstTraversal(vertex) {
    let visitedVertices = [];
    let result = [];
    let adjList = this.adjacencyList;
    if (vertex) {
      DFS(vertex);
    } else {
      return console.log('you must pass vertex as a parameter');
    }

    function DFS(vertex) {//a,b
      console.log('vertex: ' + vertex);
      if (adjList[vertex]) {
        result.push(vertex);
        visitedVertices.push(vertex);
        for (let v of adjList[vertex]) {
          if (!visitedVertices.includes(v)) {//b
            DFS(v);
          }
        }
      }
    }

    return result;
  }

}


var graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');