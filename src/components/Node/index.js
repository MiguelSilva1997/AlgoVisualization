import React from 'react';

import "./node.css"

const Node = (props) => {
    const {row, col} = props;
    return(
        <div
            id={`node-${row}-${col}`}
            className="node"
        >
        </div>
    )
}


export default Node;