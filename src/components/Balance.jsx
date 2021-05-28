import React, { useContext } from 'react'
import { GlobalContext } from '../ContextStore/GlobalState'

const Balance = () => {
    const { transaction } = useContext(GlobalContext);

    const amount = transaction.map(transaction => transaction.amount)
    const total = amount.reduce((a, b) => (a += b))
    // console.log(total)
    return (
        <>
            <h2>Your Balance <br /> ${total} </h2>
        </>
    )
}

export default Balance;