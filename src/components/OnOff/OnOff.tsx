import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {



    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "gray"
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onClick(true) } }>ON</div>
            <div style={offStyle} onClick={ () => { props.onClick(false) } }>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

