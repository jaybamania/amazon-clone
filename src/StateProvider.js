import React, { createContext, useContext, useReducer } from 'react'


//prepares the DataLayer
export const StateContext = createContext()

// Wrapping our App and provide the Data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider 
        value={useReducer(reducer, initialState)}
    >
        {children}
    </StateContext.Provider>
)


//Pull Information from the data layer
export const useStateValue = () => useContext(StateContext)

