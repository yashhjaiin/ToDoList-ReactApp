import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './AddItems';
import ToList from './ToList';

const App = () => {

    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    // general technique to assign id
    // let [count, setCount] = useState(0);

    const addValue = (event) => {
        setValue(event.target.value);
    }

    const addItem = () => {

        // Asigning id using count by incrementing state
        // setCount(count + 1);
        // let tempList = list.concat({ id : count, name : value});

        // Asigning id using uuid
        if (value !== '') {
        let tempList = list.concat({ id : uuidv4() , name : value});
        setList(tempList);
        setValue(''); }
        else {
            setList([...list]);
        }
    }

    const deleteItem = (id) => {
        // console.log(id + ' deleted');
        
        setList(list.filter((elem) => {
            return elem.id !== id;
        }))
    }

    return(
    <>  
        <div className="upper_div">
            <div className="middle_div">                
                <h1> To-Do List </h1>
                <AddItem
                    addValue = {addValue}
                    value = {value}
                    addItem = {addItem}
                 />
                <div className='sc'>
                    <ol>
                        {list.map((items) => {
                            return <ToList
                                    key = {items.id}
                                    id = {items.id}
                                    text = {items.name}
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
