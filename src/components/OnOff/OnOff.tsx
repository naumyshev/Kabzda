import React, {useState} from 'react';

type PropsType = {
    //on: boolean
}

export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "gray"
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { setOn(true) } }>ON</div>
            <div style={offStyle} onClick={ () => { setOn(false) } }>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

