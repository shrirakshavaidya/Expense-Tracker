import React, { useState } from 'react'

import './ShowExpenses.css'
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';

function ShowExpenses(props) {


    const [filteredyear, setfilteredyear] = useState(2020)
    const getyear = (yeardata) => {
        setfilteredyear(yeardata)
        // console.log(yeardata)
    }
    const filteredExpenses=props.list.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredyear
    })

    
    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter ongetyear={getyear} filteredyear={filteredyear} />
                <ExpenseList items={filteredExpenses}/>
                
            </Card>
        </div>


    )
}

export default ShowExpenses