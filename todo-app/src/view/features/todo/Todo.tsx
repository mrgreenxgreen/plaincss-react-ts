
import CSS from "./Todo.module.css"
import Add from "../../atoms/add/Add.tsx";
import List from "../../atoms/list/List.tsx";
import {useState} from "react";
import ITodoItem from "../../../interfaces/List.interface.tsx";
const Todo = () => {
    const [list, setList] = useState<Array<ITodoItem>>([
        {
            Item:"first",
            isCompleted:false,
            isDeleted:false

        }
    ])
    const handleNewItem = (newItem:ITodoItem):void=>{

        setList([...list,newItem])
    }
    return (
        <div className={CSS.body}>
            <div className={CSS.container}>
                <Add onAdd={handleNewItem}/>
                <List items={list}/>
            </div>
        </div   >
    );
};

export default Todo;
