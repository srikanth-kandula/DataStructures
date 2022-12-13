/**
 * Implementation of the graph using adjacency list along with validations
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      console.log('Duplicate vertex!!!');
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      console.log('at least one of the vertices is not present, first add vertex');
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      //remove all edges connected to vertex
      //delete vertex
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        this.removeEdge(vertex, this.adjacencyList[vertex][i]);
      }
      delete this.adjacencyList[vertex];
    } else {
      console.log('the mentioned vertex is not present in the graph.');
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vrtx) => { vrtx !== vertex2 });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vrtx) => { vrtx !== vertex1 });
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
