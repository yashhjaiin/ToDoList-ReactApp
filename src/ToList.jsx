import React from 'react';

const ToList = (prop) =>{
    return(
        <>
            <div className="displayStyle">
                <i className="fa fa-times-circle" onClick={()=> {prop.conect(prop.id)}} aria-hidden="true"/>
                <li> {prop.text} </li>
            </div>
        </>
    );
}

export default ToList;