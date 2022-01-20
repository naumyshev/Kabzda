import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {


    return (
        <div className={"App"}>
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}


            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />

            <OnOff  />
            <OnOff  />
            <OnOff  />
            <OnOff  />
            <OnOff  />

            <Accordion title={'Menu'} />

            <Accordion title={'Articles'} />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}

export default App


