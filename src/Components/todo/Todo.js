import React,{useState} from 'react'
import './Todo.css'
import List from './List'
function Todo(){
    const [inputList,setInputList] = useState("")
    const [Items, setItems] = useState([])
    const itemEvent = (event) => {
        setInputList(event.target.value)
    };
    const addlistitom = () => {
     setItems((oldItems)=>{
         return [...oldItems, inputList]
     })
     setInputList("")
    }
   
    return(
        <div className="main_div">
            <div className="center_div">
             <h1>Todo List</h1>
             <input type="text" placeholder="List of Item" value={inputList} onChange={itemEvent}/>
             <button className="addbtn" onClick={addlistitom}>+</button>
             <ol>
                 {/* <li>{inputList}</li> */}
             {
                 Items.map((Itemvalue) =>{
                     return <List text={Itemvalue}/>
                 })
             }
             </ol>
            </div>
        </div>
    )
}
export default Todo