import React from 'react';
import { GiRunningNinja, GiPodiumWinner } from 'react-icons/gi';

import "./node.css"

const Node = (props) => {
    const {
        row,
        col,
        isStart,
        isEnd,
        isWall,
        handleDrop,
        handleMouseEnter,
        handleMousePressed,
        toggleMousePressed,
    } = props;
    let secondClass;
    let icon;

    if (isWall) {
        secondClass = "wall";
    }

    if (isStart) {
        icon = <GiRunningNinja className="icon" />
    }

    if (isEnd) {
        icon = <GiPodiumWinner className="icon" />
    }
    console.log(isStart)

    return(
        <div
            id={`node-${row}-${col}`}
            className={`node ${secondClass}`}
            onDragOver={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
            onDragEnter={(e) => {
                e.stopPropagation();
            }}
            onDrop={() => handleDrop(row, col)}
            onMouseEnter={() => handleMouseEnter(row, col)}
            onMouseDown={() => handleMousePressed(row, col)}
            onMouseUp={() => toggleMousePressed(false)}
        >
            {icon}
        </div>
    )
}


export default Node;