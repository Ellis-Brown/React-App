import React from 'react';
import "App.css";
import sleepy from './images/Sleepy.png'

const App = () => (
    <div>
        <h1 className="thing"> Hello React</h1>
        <img src={sleepy} alt="sleepy" />
    </div>
)
export default App;