import React, {useContext}from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const Balance = () => {
    const {transactions}= useContext(GlobalContext)
    const amount= transactions.map(transaction =>transaction.amount)
    const balance = amount.reduce((acc,val)=>(acc+=val), 0).toFixed(2);
    console.log (balance) 
    return (
       <>
        <h4> Your Balance</h4>
        <h1 >${balance}</h1>
       </>
    )
}


 