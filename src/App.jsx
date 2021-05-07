import React, { useState } from 'react';
import ToList from './ToList';

const App = () => {

    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const addValue = (event) => {
        setValue(event.target.value);
    }

    const addItem = () => {
        setList((olist) => {
            return [...olist, value];
        });
        setValue('');
    }

    const deleteItem = (id) => {
        console.log(id + ' deleted')
        setList(list.filter((elem, index) => {
            return index !== id;
        }))
    }

    return(
    <>  
        <div className="upper_div">
            <div className="middle_div">                
                <h1> To-Do List </h1>
                <input type="text" placeholder="Add Items" onChange={addValue} value={value} required/> 
                <button onClick={addItem}> + </button>
                <div className='sc'>
                    <ol>
                        {list.map((items, index) => {
                            return <ToList
                                    key = {index}
                                    id = {index}
                                    text = {items}
                                    conect = {deleteItem}
                                    />
                        })}
                    </ol>
                </div>
            </div>
        </div>
    </>
    );
}

export default App;
