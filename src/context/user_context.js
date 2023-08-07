import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from "../components/Loading"

const UserContext = React.createContext()


export const UserProvider = ({ children }) => {
  const {loginWithRedirect,logout,user,isLoading}
  =useAuth0()

const [myuser,setmyuser]=useState(null)


  useEffect(()=>{
     setmyuser(user) 
  },[user])

  if(isLoading){
    return <Loading />
  }
  
  return (
    <UserContext.Provider value={{loginWithRedirect,logout,myuser}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
