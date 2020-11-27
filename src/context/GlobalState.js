import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Inicial
const initialState = {
    transactions: [
        { id: 1, text: 'Transferencia de Maria', amount: 1937.62 },
        { id: 2, text: 'Spotify', amount: -115.25 },
        { id: 3, text: 'Disney Plus', amount: -159.88 },
        { id: 4, text: 'Sueldo', amount: 3000 },
        { id: 5, text: 'Transferencia a Roberto', amount: -1500.13 },
        { id: 6, text: 'Netflix', amount: -216.40 },
    ]
}

// Context
export const GlobalContext = createContext(initialState);

// Provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children}
    </GlobalContext.Provider>)
}