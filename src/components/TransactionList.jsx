import React, { useContext } from 'react'
import { GlobalContext } from '../ContextStore/GlobalState'

const TransactionList = () => {
    const { transaction } = useContext(GlobalContext);
    // console.log(content)
    return (
        <div>
            <h3>History</h3>
            <hr/>
            <ul className="list">
                {transaction.map((v, i) => {
                    return (
                        <li className="minus">
                            {v.text} <span>-$400</span><button className="delete-btn">x</button>
                        </li>)
                })}
                {/* <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li> */}
            </ul>
        </div>
    )
}

export default TransactionList
