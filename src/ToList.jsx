import React, { useState } from 'react';
import CrossStyle from './CrossStyle';
import CheckStyle from './CheckStyle';

const ToList = (prop) =>{

    let [isHoverx, setHoverx] = useState(false);
    let [isHoverc, setHoverc] = useState(false);

    let [clicked, checkClicked] = useState(false);

    let [click, setClick] = useState(false);

    let style = (e) => {
        setClick(true);
        checkClicked(true);
    }

    const typeOne = (event) =>{
        // console.log(event.target.id);
        event.target.id === 'check' ? setHoverc(true) : setHoverx(true);
        if (clicked === true) { setHoverc(true); }
    }

    const typeTwo = (event) =>{
        event.target.id === 'check' ? setHoverc(false) : setHoverx(false);
        if (clicked === true) { setHoverc(true); }
    }

    return(
        <>  
            <div className="displayStyle">
                
                <CrossStyle 
                    isHoverx = {isHoverx}
                    typeOne = {typeOne}
                    typeTwo = {typeTwo}
                    propConnect = {prop.conect}
                    propId = {prop.id} />

                <p className='text' style={{textDecoration : click ? "line-through" : "none"}}> {prop.text} </p>

                <CheckStyle 
                    isHoverc = {isHoverc}
                    typeOne = {typeOne}
                    typeTwo = {typeTwo}
                    clicked = {clicked}
                    style = {style} />
                
            </div>
        </>
    );
}

export default ToList;
