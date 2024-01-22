import { Dialog, Transition } from '@headlessui/react'
import {Fragment, SetStateAction, useContext, useState} from 'react'
import {Context} from "../../../context/UserContext.tsx";
import {useNavigate} from "react-router-dom";

interface IUserDetails {
     username: string | undefined,
    password: string | undefined,
    isActive?: boolean,
    role?: "user" | "admin"
}

export default function Modal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [userName, setUsername] = useState<string | undefined>("");
    const [userPassword, setUserPassword] = useState<string | undefined>("");
    const [userCredentials, setUserCredentials] = useState<IUserDetails>();

    const {user,setUser} = useContext(Context)

    const navigate = useNavigate()

    console.log(userName+"this is modal username")
    console.log(userPassword+"this is modal password")
    const handleUserCredentials = ()=> {

        const credentials = {
            username: userName,
            password: userPassword,
            isActive: true,
            role: "user"
        }
        setUser(credentials)
        localStorage.setItem("userCredentials",JSON.stringify(credentials))

        navigate("/home")

    }

    //testing purposes
    console.log(typeof(user))
    console.log(user)
    console.log(user)
    console.log(userCredentials)

    //methods
    const handleUsername = (e: {target:{ value: SetStateAction<string | undefined>;}} )=>{
        setUsername(e.target.value)
    }
    const handlePassword = (e:{target:{value:SetStateAction<string | undefined>;}}) =>{
        setUserPassword(e.target.value)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const addToCart = ()=>{
        alert("item just added to cart")
    }
    return (
        <>
            <div className=" flex items-center justify-start gap-4">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-3xl rounded-md bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Order now
                </button>
                <button
                    type="button"
                    onClick={addToCart}
                    className="text-3xl rounded-md bg-amber-200 px-4 py-2 font-medium text-amber-950 hover:bg-amber-600
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Add to cart
                </button>

            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Please login to continue
                                    </Dialog.Title>
                                    <form className="">
                                    <div className="mt-2">
                                        <fieldset className="border-2 border-gray-400 rounded-md p-1">
                                            <legend className="ml-5"><label htmlFor="username">&nbsp; Username&nbsp; </label></legend>
                                            <input type="text" id="username" name="username" onBlur={handleUsername} className="w-full p-2 rounded-md focus:outline-none"/>
                                        </fieldset>
                                        <br/>
                                        <fieldset className="border-2 border-gray-400 rounded-md p-1">
                                            <legend className="ml-5"> <label htmlFor="password">&nbsp;  Password &nbsp;  </label></legend>
                                            <input type="password"  id="password" name="password" onBlur={handlePassword} className="w-full p-2 rounded-md focus:outline-none" />
                                        </fieldset>
                                    </div>

                                    <div className="mt-4 flex justify-center gap-5">
                                        <button
                                            type="button"
                                            className=" inline-flex justify-center rounded-md border border-transparent
                                             bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                                             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleUserCredentials}
                                        >
                                            Login
                                        </button>
                                        <button
                                            className="border-2 border-blue-200 pl-2 pr-2 rounded-md text-blue-900 text-sm  font-medium hover:bg-blue-200"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}