import React, { useContext } from 'react'
import { GlobalContext } from '../ContextStore/GlobalState'

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);

    return (

        <li>
            {transaction.text} <span>${transaction.amount}</span><button
                onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
