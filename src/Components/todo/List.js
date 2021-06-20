import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";

const List = (props) => {
    return (
        <div className="todolist">
            <AiFillCaretRight className="aficon"/>
        <li> {props.text} </li>
        </div>
    )
}
export default List