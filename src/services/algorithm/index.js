const dijkstra = (startNode, grid) => {
    const visitedNodes = [];
    const { row, col } = startNode;

    grid[row][col]["distance"] = 0;

    let unvisitedNodes = getNodes(grid);

    while (unvisitedNodes.length !== 0) {
        unvisitedNodes = sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();

        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity) {
            return visitedNodes;
        }
        
        closestNode.isVisited = true;
        visitedNodes.push(closestNode);
        
        if (closestNode.isEnd) {
          const shortestPath = getNodesInPathOrder(closestNode);
          return { visitedNodes, shortestPath };
        }
        updateUnvisitedNeighbors(closestNode, grid);
    }
}

const sortNodesByDistance = (unvisitedNodes) => {
   return unvisitedNodes.sort((a, b) => a.distance - b.distance)
}

const updateUnvisitedNeighbors = (node, grid) => {
    const unvisitedNeighbors = collectUnvisitedNeighbors(node, grid);
    unvisitedNeighbors.forEach(neighborNode => {
        neighborNode.distance = node.distance + 1;
        neighborNode.previousNode = node;
    })
}
  
const collectUnvisitedNeighbors = (node, grid) => {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

const getNodes = (grid) => {
    const allNodes = [];
    grid.forEach(row => {
        row.forEach(node => {
            allNodes.push(node);
        })
    })
    return allNodes;
}

const getNodesInPathOrder = (currentNode, shortestPath = []) => {
    if (currentNode !== null) {
        shortestPath.unshift(currentNode)
        return getNodesInPathOrder(currentNode.previousNode, shortestPath)
    }
    return shortestPath
}

export {
    dijkstra,
    getNodesInPathOrder,
}