import React, { useState, useEffect } from 'react';
import Node from '../Node'
import { createInitialGrid, updateGridWall } from '../../services/board';

import "./main.css"

const Main = () => {
    const [grid, setGrid] = useState([]);
    const [isMousePressed, toggleMousePressed] = useState(false);

    useEffect(() => {
        setGrid(createInitialGrid())
    }, []);

    const handleMouseEnter = (row, col) => {
        if (!isMousePressed) return;
        const newGrid = updateGridWall(grid, col, row);
        setGrid(newGrid);
    }

    const handleMousePressed = (row, col) => {
        const newGrid = updateGridWall(grid, col, row);
        toggleMousePressed(true);
        setGrid(newGrid);
    }

    return(
        <>
          <div className="header">
            <h1 className="title">Dijkstra Algorithm Visualizer</h1>
          </div>
          <div className="board">
            {
                grid.map((row, i) => {
                    return (
                        <div key={i}>
                        {
                            row.map((node) => {
                                const {row, col, isWall} = node;
                                return (
                                    <Node
                                        key={row + '-' + col}
                                        col={col}
                                        isWall={isWall}
                                        row={row}
                                        handleMouseEnter={handleMouseEnter}
                                        handleMousePressed={handleMousePressed}
                                        toggleMousePressed={toggleMousePressed}
                                    />
                                );
                            })
                        }
                        </div>
                    )
                })
            }
          </div>
          <div className="menu">
            <button className="startButton">
                Run Dijkstra Algorithm
            </button>
          </div>
        </>
    )
}


export default Main;