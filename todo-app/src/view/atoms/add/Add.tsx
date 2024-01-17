import CSS from "./Add.module.css"
import {ChangeEvent, useState} from "react";
import ITodoItem from "../../../interfaces/List.interface.tsx";

const Add = ({ onAdd }: { onAdd: (item: ITodoItem) => void }) => {
    const [item, setItem] = useState<string>("");

    console.log(item);
    const handleChange = (e:ChangeEvent<HTMLInputElement> ):void=>{
        setItem(e.target.value)
    }
    const handleClick = ():void=>{
        const x = {Item:item, isDeleted:false,isCompleted:false}
        onAdd(x)
        setItem("");
    }

    return (
        <div className={CSS.container}>
            <input type="text" placeholder="Enter task here" onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add;
