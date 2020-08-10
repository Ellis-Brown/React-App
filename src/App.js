import React from 'react';
import "App.css";
import sleepy from './images/Sleepy.jpg';

//Import components
import Nav from './Nav';


const App = () => (
    <div>
        <Nav />
        <h1 className="thing"> Hello React</h1>
        <img src={sleepy} alt="sleepy" />
    </div>
)
export default App;