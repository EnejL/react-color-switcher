import React, { useState } from 'react';
import ColorChangeButton from './colorChangeButton'
import './App.css';

function App() {
    const [color, setColor] = useState('')
    console.log(color)
    return (
        <div className={"react-root " + color}>
            <div className="centered">
                <h1>Colour picker</h1>
                <ColorChangeButton color="red" setColor={setColor}/>
                <ColorChangeButton color="blue" setColor={setColor}/>
                <ColorChangeButton color="yellow" setColor={setColor}/>
            </div>
        </div>
    );
}

export default App;
