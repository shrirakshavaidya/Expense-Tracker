import React from "react"
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem"



const ExpenseList=(props)=>{
    
    if (props.items.length===0) {
        return <h2 className="expenses-list__fallback">No Expenses To Show</h2>
    }
    return (
       props.items.map((list)=>
        <ExpenseItem title={list.title} amount={list.amount} date={list.date} key={list.id}/>)
    )
}

export default ExpenseList