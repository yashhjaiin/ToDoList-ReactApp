import React from 'react';

const CheckStyle = ({isHoverc, typeOne, typeTwo, clicked, style}) =>{
    return(
        <>
            <p className='check'> 
                <i className = {isHoverc ? "fa fa-check-circle-o check" : "fa fa-check-circle check"}
                    style = {{color : clicked ? 'rgb(7, 207, 57)' : ''}}
                    id="check" onMouseOver = {typeOne} onMouseOut = {typeTwo} 
                    onClick={style} aria-hidden="true"/> 
            </p>
        </>
    );
}

export default CheckStyle;
