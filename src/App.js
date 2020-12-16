import React, { useState } from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState('')
    console.log(color)
    return (
        <div className={"react-root " + color}>
            <div className="centered">
                <h1>Colour picker</h1>
                <button className="red" onClick={() => setColor("red")}>red</button>
                <button className="blue" onClick={() => setColor("blue")}>blue</button>
                <button className="yellow" onClick={() => setColor("yellow")}>yellow</button>
            </div>
        </div>
    );
}

export default App;
