import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)


    return (
        <div className={"App"}>
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}


            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <hr/>

            <OnOff on={on}
                   onClick={setOn} />


            <Accordion title={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={setAccordionCollapsed} />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App


