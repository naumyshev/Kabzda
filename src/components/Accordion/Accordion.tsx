import React from "react";

 export function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    )
}
function AccordionTitle(props: any) {
    return (
        <h3>{ props.title }</h3>
    )
}

function AccordionBody(props: any) {

   if (props.collapsed) {
       return (
           <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
           </ul>
       )
   }

   return <div>...</div>

}