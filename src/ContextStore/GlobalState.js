import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transaction: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// create provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        })

    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })

    }


    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}