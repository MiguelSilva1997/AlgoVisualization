const createInitialGrid = (rows = 20, cols = 50) => {
    const grid = [];
    for (let row = 0; row < rows; row++) {
        const curRow = [];
        for (let col = 0; col < cols; col++) {
            curRow.push(createNode(col, row));
        }
        grid.push(curRow);
    }
    return grid;
}

const createNode = (col, row) => ({
    cssClass: "",
    col,
    row,
    distance: Infinity,
    isEnd: false,
    isStart: false,
    isVisited: false,
    isWall: false,
    previousNode: null,
})

const updateGridWall = (grid, col, row) => {
    grid[row][col]["isWall"] = !grid[row][col]["isWall"];
    return grid;
}

const updateStartAndEnd = (grid, placeNode, row, col) => {
    grid[row][col][placeNode] = !grid[row][col][placeNode];
    if (placeNode == "isStart") {
        grid[row][col].distance = 0; 
    }
    return grid;
}

export {
    createInitialGrid,
    updateGridWall,
    updateStartAndEnd,
}
