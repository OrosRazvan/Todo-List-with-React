import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function TodoCard(props) {
    const { children, handleDelete, index, handleEdit } = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEdit(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDelete(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
