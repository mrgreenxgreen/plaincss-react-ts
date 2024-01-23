import { Menu } from '@headlessui/react'
import {useNavigate} from "react-router-dom";
import {Context} from "../../../context/UserContext.tsx";
import {useContext} from "react";

export default function DropdownButton({name}:{name:string}) {
    const {user, setUser} = useContext(Context)
    const navigate = useNavigate()
    const handleLogout = ()=>{

         localStorage.clear()
        setUser({...user , isActive:false})
        navigate("/home")
    }
    return (
        <Menu>
            <Menu.Button>{name}</Menu.Button>
            <Menu.Items style={{position:"absolute",zIndex:"999",backgroundColor:"#F2F2F2",height:"fit-content", width:"10rem",
                display:"flex",flexDirection:"column",padding:"1em",borderRadius:"10px"}}>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'font-medium'}`}
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'font-medium'}`}
                            href="/account-settings"
                        >
                            Help Center
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'font-medium'}`}
                        onClick={handleLogout}
                    >
                        Logout
                    </a>
                        )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}