import React from 'react'

function JoinScreen({start}) {
    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <p>Hello Guys ready to play the Kwanga's Quiz?</p> 
            <button onClick={start}>Start</button>
        </div>
    )
}

export default JoinScreen;
