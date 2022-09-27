import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  token: null,
  displayName: null,
  isLoggedIn: false,
  login: token => {},
  logout: () => {}
})



export const AuthContextProvider = ({children}) => {

  const [token, setToken] = useState(null)
  const [displayName, setDisplayName] = useState(null)

  const userIsLoggedIn = !!token

  const loginHandler = ({idToken: token, displayName}) => {
    setDisplayName(displayName)
    setToken(token)

    console.log(token)
    console.log(displayName)
  }

  const logoutHandler = () => {}


  const contextValue = {
    token: token,
    displayName: displayName,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }


  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}