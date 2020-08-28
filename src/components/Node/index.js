import React from 'react';

import "./node.css"

const Node = (props) => {
    const {
        row,
        col,
        isWall,
        handleMouseEnter,
        handleMousePressed,
        toggleMousePressed,
    } = props;
    let secondClass;

    if (isWall) {
        secondClass = "wall";
    }


    return(
        <div
            id={`node-${row}-${col}`}
            className={`node ${secondClass}`}
            onMouseEnter={() => handleMouseEnter(row, col)}
            onMouseDown={() => handleMousePressed(row, col)}
            onMouseUp={() => toggleMousePressed(false)}
        >
        </div>
    )
}


export default Node;