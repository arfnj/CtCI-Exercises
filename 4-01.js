/*jshint esversion: 6*/

const bfsGraphRoute = (start, end) => {
  if (start.value === end.value) {
    return true;
  }
  let queue = new Queue();
  let visited = new Set();
  queue.enqueue(start);
  let current = queue.dequeue();
  visited.add(current.value);
  while (current) {
    if (current.value === end.value) {
      return true;
    }
    current.edges.forEach(connection => {
      if (!visited.has(connection.value)) {
        visited.add(connection.value);
        queue.enqueue(connection.value);
      }
    });
    current = queue.dequeue();
  }
  return false;
};

const dfsGraphRoute = (start, end) => {
  let visited = new Set();

  const searcher = (node) => {
    if (node.value === end.value) {
      return true;
    }
    visited.add(node.value);
    node.edges.forEach(connection => {
      if (!visited.has(connection.value)) {
        return searcher(connection);
      }
    });
    return false;
  };

  return searcher(start);
};