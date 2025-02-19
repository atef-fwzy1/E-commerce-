import { createContext,useState } from "react";
export const   CardValue = createContext();

export default function CardNumber({children}){
    const[number,setNumber]=useState(0)
    return <CardValue.Provider value={{number,setNumber}}>{children}</CardValue.Provider>
}