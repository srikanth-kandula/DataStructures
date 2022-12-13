
// priority queue implemented using binary heap is much more efficient
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ value: val, priority });
    this.sort();
  };

  dequeue() {
    return this.values.shift();
  };

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };

}

class WeightedGraph {

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  dijkstra(startVertex, endVertex) {

    let distances = {};
    let previous = {};
    let vertices = new PriorityQueue();
    let path = [];
    let smallestVertex = null;

    //initialize the data structures
    for (let vertex in this.adjacencyList) {
      let distance = Infinity;
      if (vertex === startVertex)
        distance = 0;

      distances[vertex] = distance;
      vertices.enqueue(vertex, distance)
      previous[vertex] = null;
    }

    for (let i = 0; i < vertices.values.length; i++) {
      smallestVertex = vertices.dequeue().value;

      if (smallestVertex === endVertex) {
        //return the path of nodes
        while (previous[smallestVertex]) {
          path.push(smallestVertex);
          smallestVertex = previous[smallestVertex];
        }
        break;
      } else {
        for (let arrayKey in this.adjacencyList[smallestVertex]) {
          //this.adjacencyList[smallestVertex] is an array of objects. arrayKey is key in array i.e. 0,1,2..
          //this.adjacencyList[smallestVertex][arrayKey] is an object
          let neighbor = this.adjacencyList[smallestVertex][arrayKey];
          let neighborDistance = distances[smallestVertex] + neighbor.weight;
          let neighborVertex = neighbor.node;
          if (neighborDistance < distances[neighborVertex]) {
            //update with new distance
            distances[neighborVertex] = neighborDistance;
            //update how the node is reached
            previous[neighborVertex] = smallestVertex;
            //update queue with new priority
            vertices.enqueue(neighborVertex, neighborDistance)
          }
        }
      }
    }

    return path.concat(smallestVertex).reverse();

  }

}


var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);

graph.dijkstra("A", "E");