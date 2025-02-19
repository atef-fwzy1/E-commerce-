import { createContext,useState } from "react";
export const   CARD = createContext();

export default function CartContext({children}){
    const[cart,setCard]=useState(1)
    return <CARD.Provider value={{cart,setCard}}>{children}</CARD.Provider>
}