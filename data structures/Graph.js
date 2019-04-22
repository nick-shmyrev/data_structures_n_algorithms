/*
GRAPHS
Abstract data type
Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).
Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}
Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.


*** Nightmare mode:
TODO: Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.
graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.
graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.
Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}
var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]
var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]
*** Exercises:
TODO: Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).
*/

class Graph {
  constructor() {
    this.adjList = {};
  }
  
  // Add node to graph
  // => undefined
  addNode(value) {
    if (value === undefined) throw new Error('No node value provided');
    
    this.adjList[value] = [];
    
    return this;
  }
  
  // Create connection between two nodes if they're both present in the graph
  addEdge(value1, value2) {
    if (!this.contains(value1) || !this.contains(value2)) throw new Error('Invalid node values');
    
    const value1Edges = this.adjList[value1];
    const value2Edges = this.adjList[value2];
  
    value1Edges.push(value2);
    value2Edges.push(value1);
    
    return this;
  }
  
  // Remove node from graph
  // => undefined
  removeNode(value) {
    const nodeEdges = this.adjList[value];
    
    nodeEdges.forEach(neighbor => {
      const neighborEdgesArr = this.adjList[neighbor];
      const edgeIndex = neighborEdgesArr.indexOf(value);
  
      neighborEdgesArr.splice(edgeIndex, 1);
    });
    
    delete this.adjList[value];
  }
  
  // Remove connection between two nodes
  // => undefined
  removeEdge(value1, value2) {
    if (!this.hasEdge(value1, value2)) throw new Error('Edge does not exist');
    
    const value1Edges = this.adjList[value1];
    const value2Edges = this.adjList[value2];
  
    value1Edges.splice(value1Edges.indexOf(value2), 1);
    value2Edges.splice(value2Edges.indexOf(value1), 1);
  }
  
  // Returns true if value is found in graph, false otherwise
  // => true/false
  contains(value) {
    return this.adjList.hasOwnProperty(value);
  }

  // Returns true if edge exists, false otherwise
  // => true/false
  hasEdge(value1, value2) {
    if (!this.contains(value1) || !this.contains(value2)) throw new Error('Invalid node values');
    
    const value1Edges = this.adjList[value1];
    const value2Edges = this.adjList[value2];
    
    return (
      value1Edges.includes(value2) &&
      value2Edges.includes(value1)
    );
  }
  
  // Traverse the graph and invoke the passed callback once for each node.
  // The callback function receives the following for each node:
  // node value, node Neighbors, all nodes.
  // => undefined
  forEach(callback) {
    for (let node in this.adjList) {
      if (this.adjList.hasOwnProperty(node)) callback(node, this.adjList[node], this.adjList);
    }
  }
}

const graph = new Graph();

graph
  .addNode(1).addNode(14).addEdge(1, 14)
  .addNode(23).addEdge(23, 14)
  .addNode(17).addEdge(17, 14)
  .addNode(16).addEdge(16, 23).addEdge(16, 17)
  .addNode(103).addEdge(103, 16)
  .addNode(115).addEdge(115, 103)
  .addNode(7).addEdge(7, 103)
  .addNode(24).addEdge(24, 103);
