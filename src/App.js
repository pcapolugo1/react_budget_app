import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='row'>
                                <h2 className='mt-3'> Allocation </h2>
                                <ExpenseList />
                            </div>

                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div>
                                <h2 className='mt-3'> Change Allocation </h2>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
