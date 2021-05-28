import React, { useState } from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label> Enter Description <br/></label>
                    <input type="text" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label >
                        Amount <br />(negative - expense, positive - income) <br/>
                    </label>
                    <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
                </div>
                <input className='btn' type='submit' value='Add transaction'/>
            </form>
        </>
    )
}

export default AddTransaction
