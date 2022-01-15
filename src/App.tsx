import React from 'react';
import './App.css';
import {constants} from "http2";


function App() {


    return (
        <div>
            This is App component
            <Rating/>
            <Accordion />
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
    return (
        <div>
            Star
        </div>
    )
}

export default App


