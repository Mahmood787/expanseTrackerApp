import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExp} from './components/incomeExp'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header/>
          <div className="container">
            <Balance />
            <IncomeExp/>
            <TransactionList />
            <AddTransaction />
          </div>
      </GlobalProvider>
      Created By Mahmood Ahmed <br/>
      Roll No	PIAIC162544<br/>
    	Batch 35
    </div>
  );
}

export default App;
