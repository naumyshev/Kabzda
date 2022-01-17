import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {


    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={3} />
            <Accordion title={'Menu'} collapsed={false}/>
            <Rating value={4} />
            <Accordion title={'Aticls'} collapsed={true}/>
            <Rating value={4} />
        </div>
    );
}



function PageTitle(props: any) {
    return <h1>{ props.title }</h1>
}

export default App


