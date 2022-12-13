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
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(v => v !== vertex1);
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
    result = DFS();

    function DFS (vertex) {
      if(!vertex)
        return null;
      else {
        result.push(vertex);
        visitedVertices[vertex] = true;

        let neighbors = this.adjacencyList[vertex];
        for(let i=0; i<neighbors.length; i++) {
          if(!visitedVertices[neighbors[i]]) {
            DFS(neighbors[i]);
          }
        }
      }

      return result;
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