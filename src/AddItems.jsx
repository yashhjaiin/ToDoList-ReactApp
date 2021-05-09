import React from 'react';

const AddItem = ({addValue, value, addItem}) =>{
    return(
        <>
            <input type="text" placeholder="Add Items" onChange={addValue} value={value} required/> 
            <button onClick={addItem}> + </button>
        </>
    );
}

export default AddItem;
