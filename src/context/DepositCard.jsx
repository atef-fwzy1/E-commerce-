import { createContext,useState } from "react";
export const   Deposit = createContext();

export default function DepositContxet({children}){
    const[isOpen,SetIsOpen]=useState(true)
    return <Deposit.Provider value={{isOpen,SetIsOpen}}>{children}</Deposit.Provider>
}