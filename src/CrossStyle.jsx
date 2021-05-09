import React from 'react';

const CrossStyle = ({isHoverx, typeOne, typeTwo, propConnect, propId}) =>{
    return(
        <>  
            <p className='cross'>
                <i className = {isHoverx ? "fa fa-times-circle-o cross" : "fa fa-times-circle cross"}
                    id="cross" onMouseOver = {typeOne} onMouseOut = {typeTwo}
                    onClick={() =>{propConnect(propId)}} aria-hidden="true"   />
            </p>
        </>
    );
}

export default CrossStyle;
