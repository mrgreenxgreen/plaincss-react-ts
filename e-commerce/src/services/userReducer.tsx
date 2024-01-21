import {SetStateAction, useReducer, useState} from 'react'

const initialState = {
    name: "john"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "post": {
            return state.value;
        }
        case "get": {

            return "hehe"
        }
        default:
            return state;
    }
};

export default function MyComponent() {

    const [state, dispatch] = useReducer(reducer, {value:""});


    const handleInputName = (e: { target: { value: SetStateAction<string>; }; })=>{
        setName(e.target.value)
    }

    return (
        <div>
            <label htmlFor="name">name:</label>
            <input type="text" placeholder="enter your name" id="name" name="name" onBlur={handleInputName}/>
            <p>
                Count: {state}
                {name}
            </p>
            <button onClick={()=>dispatch({type:"post"})} className="p-1 rounded-md border-2 border-gray-600">
                Save
            </button>
            <button onClick={()=>dispatch({type:"get"})} className="p-1 rounded-md border-2 border-gray-600" >
                Display
            </button>
        </div>
    )
}