import {useReducer, useState} from "react";
import {reducer} from "./userReducer.tsx";

export default function SampleReducer(){
    const [name, setName] = useState("")
const [state,dispatch] = useReducer(reducer, {value:""})
const handleInputName = ()=>{
    dispatch({type:"post",value:name})
    setName("")
};

return (
    <div>
        <label htmlFor="name">name:</label>
        <input type="text"
               placeholder="enter your name"
               id="name"
               value={name}
               name="nam"
               onChange={(e)=>{setName(e.target.value)}}/>
        <p>
            Count: {state.value}

        </p>
        <button onClick={handleInputName} className="p-1 rounded-md border-2 border-gray-600">
            Save
        </button>
        <button onClick={()=>dispatch({type:"get"})} className="p-1 rounded-md border-2 border-gray-600" >
            Display
        </button>
    </div>
)
}