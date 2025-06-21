import { createContext } from "react";
//create context
export const UserContext=createContext();
//contextProvider
export const UserProvider=({children})=>{
    //const name='Vaishnavi'
  const Users = {Name:'Vaishnavi', Age:'20', Department:'ECE'};
    
    return(
        <UserContext.Provider value={Users}>
            {children}
        </UserContext.Provider>
    )
}