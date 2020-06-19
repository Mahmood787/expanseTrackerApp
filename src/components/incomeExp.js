import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const IncomeExp = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction =>transaction.amount )
    const income = amounts.filter(n =>n>0).reduce((acc,val)=>acc+=val,0).toFixed(2);
    const exp = amounts.filter(x =>x<0).reduce((acc,val)=>acc+=val,0)
                .toFixed(2)*-1
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4 > Expanse</h4>
                <p className="money minus">${exp}</p>
            </div>
            
        </div>
    )
}
