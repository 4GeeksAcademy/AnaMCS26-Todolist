import React, { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setList([inputValue, ...list]);
            setInputValue('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addItem();
        }
    }

    const deleteItem = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div className="text-center">
            <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                onKeyDown={handleKeyDown}
                placeholder={list.length === 0 ? "No hay tareas, añadir tareas" : ""}
            />

            {list.length > 0 && (
                <ul>
                    {list.map((el, i) => (
                        <li key={i}>
                            {el}
                            <button onClick={() => deleteItem(i)}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </li>
                    ))}
                </ul>

                 
            )}
            <p>Total de tareas: {list.length}</p>
        </div>
    );
};

export default Input;
