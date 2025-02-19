import { createContext,useState } from "react";
export const   Alert = createContext();

export default function ALertcontext({children}){
    const[iSOpen,setIsopen]=useState({state:true,text:"frist",type:"good"})
    return <Alert.Provider value={{iSOpen,setIsopen}}>{children}</Alert.Provider>
}