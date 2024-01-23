import {createContext, ReactElement, useState} from "react";


export const Context = createContext({})

const  UserContext = ({children}:{children:ReactElement}) => {
    const [user, setUser] = useState({})
    return (
        <div>
            <Context.Provider value={{user,setUser}} >
                {children}
            </Context.Provider>
        </div>
    );
};

export default UserContext;
