import React, { useState, useEffect } from 'react';
import Node from '../Node'
import { createInitialGrid, updateGridWall, updateStartAndEnd } from '../../services/board';
import { GiRunningNinja, GiPodiumWinner } from 'react-icons/gi';

import "./main.css"

const Main = () => {
    const [grid, setGrid] = useState([]);
    const [isMousePressed, toggleMousePressed] = useState(false);
    const [placeNode, setPlaceNode] = useState("")
    const [startCoord, setStartCoord] = useState([])
    const [endCoord, setEndCoord] = useState([])

    useEffect(() => {
        setGrid(createInitialGrid())
    }, []);

    const handleDrop = (row, col) => {
        const newGrid = updateStartAndEnd(grid, placeNode, row, col);
        if (placeNode === "isStart") {
            setStartCoord([row, col]);
        } else {
            setEndCoord([row, col])
        }
        setGrid(newGrid);
    }

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
          <div className="iconDisplay">
              <div>
                <h2>Please Drag Icon to Start Location</h2>
                <h2 draggable onDrag={() => setPlaceNode("isStart")} ><GiRunningNinja /></h2>
              </div>
              <div>
                <h2>Please Drag Icon to End Location</h2>
                <h2 draggable onDrag={() => setPlaceNode("isEnd")} ><GiPodiumWinner /></h2>
              </div>
          </div>
          <div className="board">
            {
                grid.map((row, i) => {
                    return (
                        <div key={i}>
                        {
                            row.map((node) => {
                                const {row, col, isEnd, isStart, isWall} = node;
                                return (
                                    <Node
                                        key={row + '-' + col}
                                        col={col}
                                        isEnd={isEnd}
                                        isStart={isStart}
                                        isWall={isWall}
                                        row={row}
                                        handleMouseEnter={handleMouseEnter}
                                        handleMousePressed={handleMousePressed}
                                        handleDrop={handleDrop}
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