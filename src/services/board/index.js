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
    col,
    row,
    distance: Infinity,
    isVisited: false,
})

export {
    createInitialGrid,
}
