import React, { useState, useEffect } from 'react';

import "./main.css"

const Main = () => {
    const [grid, setGrid] = useState([]);

    return(
        <>
          <div className="header">
            <h1 className="title">Dijkstra Algorithm Visualizer</h1>
          </div>
          <button className="startButton">
              Run Dijkstra Algorithm
          </button>
        </>
    )
}


export default Main;