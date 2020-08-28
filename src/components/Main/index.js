import React, { useState, useEffect } from 'react';
import Node from '../Node'
import { createInitialGrid } from '../../services/board';

import "./main.css"

const Main = () => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        setGrid(createInitialGrid())
    }, []);

    return(
        <>
          <div className="header">
            <h1 className="title">Dijkstra Algorithm Visualizer</h1>
          </div>
          <button className="startButton">
            Run Dijkstra Algorithm
          </button>
          <div className="board">
            {
                grid.map((row, i) => {
                    return (
                        <div key={i}>
                        {
                            row.map((node) => {
                                const {row, col} = node;
                                return (
                                    <Node
                                        key={row + '-' + col}
                                        col={col}
                                        row={row}
                                    />
                                );
                            })
                        }
                        </div>
                    )
                })
            }
          </div>
        </>
    )
}


export default Main;