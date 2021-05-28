import React, { useState, useContext } from 'react'
import { GlobalContext } from '../ContextStore/GlobalState'

const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);


    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const onSubmit = e => {
        e.preventDefault();

        const newTrans = {
            id: Math.floor(Math.random() * 10),
            text,
            amount: +amount
        }
        addTransaction(newTrans)
        clear()
    }
    const clear = () => {
        setAmount(0)
        setText('')
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label> Enter Description <br /></label>
                    <input type="text" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label >
                        Amount <br />(negative - expense, positive - income) <br />
                    </label>
                    <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <input className='btn' type='submit' value='Add transaction' />
            </form>
        </>
    )
}

export default AddTransaction
