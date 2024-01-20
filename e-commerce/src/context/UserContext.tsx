import {createContext, ReactElement, useState} from "react";

const UserContext = ({children}:{children:ReactElement}) => {
    const [user, setUser] = useState("")
    const UserContext = createContext({})
    return (
        <div>
            <UserContext.Provider value={{user,setUser}} >
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default UserContext;
