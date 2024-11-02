import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function FlipCard() {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip}
            flipDirection="vertical" >
            <div className="flip-card frontStyle">
                Welcome to GFG.
                <br />
                <br />
                <button className="flipbtn frontStyle" onClick={() => setFlip(!flip)}>
                    Flip</button>
            </div>
            <div className="flip-card backStyle">
                Computer Science Portal.
                <br />
                <button className="flipbtn backStyle" onClick={() => setFlip(!flip)}>
                    Flip</button>
            </div>
        </ReactCardFlip>
    );
}

export default FlipCard;
