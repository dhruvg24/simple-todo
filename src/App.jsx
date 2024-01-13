import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
      setItems((oldItems)=>{
        return [...oldItems, inputList]
      })

      setInputList("")
  };

  const deleteItem = (id)=> {
    // console.log("Item deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index!==id;
      })
    })
    
}

  return (
    <>
      {/* ui portion */}
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />

          {/* input */}
          <input type="text" placeholder="Add a item" value = {inputList} onChange={itemEvent} />

          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>
            {inputList}
          </li> */}
            {items.map((item, index) => {
              // to avoid empty string submission
              if(item !== "")
                return <TodoItem key = {index} id = {index} text = {item} onSelect = {deleteItem}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
