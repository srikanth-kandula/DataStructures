class WeightedGraph {

  constructor(){
    this.adjacencyLIst = {};
  }

  addVertex (vertex) {
    if(!this.adjacencyLIst[vertex])
      this.adjacencyLIst[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyLIst[vertex1].push({node: vertex2, weight});
    this.adjacencyLIst[vertex2].push({node: vertex1, weight:weight});
  }

}