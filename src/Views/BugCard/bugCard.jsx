import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    function Clicked(){
        props.clicked(props.name);
    }
    return(
        <div className="bug-card" onClick={Clicked}>
            <h2 className="name">
                {props.name}
            </h2>
            <h4 className="name">
                {props.priority}
            </h4>
            <h5 className="name">
                {props.version}
            </h5>
        </div>
    )
}