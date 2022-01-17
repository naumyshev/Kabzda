import React from "react";

export function Rating(props: any) {
    return (
        <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    )
}

function Star(props: any) {

    if( props.selected) {
        return (
            <span><b> Star </b></span>
        )
    }

    return (
        <span> Star </span>
    )
}