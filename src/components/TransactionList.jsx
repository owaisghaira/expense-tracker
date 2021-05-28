import React, { useContext } from 'react'
import { GlobalContext } from '../ContextStore/GlobalState'
import Transaction from './Transaction'


const TransactionList = () => {
    const { transaction } = useContext(GlobalContext);
    // console.log(content)
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="list">
                {transaction.map((v, i) => <Transaction transaction={v} key={i} />)}
                {/* <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li> */}
            </ul>
        </div>
    )
}

export default TransactionList
