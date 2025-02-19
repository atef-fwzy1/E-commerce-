import { createContext,useState } from "react";
export const Menu= createContext();

export default function MenueContext({children}){
    const[isOpen,setIsopen]=useState(false)
    return <Menu.Provider value={{isOpen,setIsopen}}>{children}</Menu.Provider>
}

