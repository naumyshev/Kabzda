import React from 'react';
import './App.css';
import {constants} from "http2";


function App() {


    return (
        <div>
            <AppTitle />
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
            <AccordionTitle />
            <AccordionBody />
        </div>
    )
}
function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Star() {
    return (
        <div>
            Star
        </div>
    )
}

function AppTitle() {
    return <>This is App component</>
}

export default App


