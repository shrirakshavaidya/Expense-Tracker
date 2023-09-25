import React,{useState} from "react";

import './NewExpenseform.css'

const NewExpenseform=(props)=>{
    const [newtitle,setnewTitle]=useState('')
    const [newamount,setnewAmount]=useState('')
    const [newdate,setnewDate]=useState('')
    const titleUpdate=(event)=>{
        setnewTitle(event.target.value)
        // console.log(event.target.value)

    }
    const amountUpdate=(event)=>{
        setnewAmount(event.target.value)
        // console.log(event.target.value)


    }
    const dateUpdate=(event)=>{
        setnewDate(event.target.value)
        // console.log(event.target.value)


    }
    const submitHandler=(event)=>{
        event.preventDefault(); //It will prevent page from being reload
        const data={
            title:newtitle,
            amount:newamount,
            date:new Date(newdate)
        
        }
        props.onSavedExpenses(data)
        setnewTitle('')
        setnewAmount('')
        setnewDate('') //two way binding
        // console.log(data)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title">Title</label>
                    <input type="text" id="title" value={newtitle} onChange={titleUpdate}/>
                </div>
                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input type="Number" min="0.01" step="0.01" value={newamount}id="amount" onChange={amountUpdate}/>
                </div>
                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input type="date" value={newdate}  id="date" min="2019-01-01" max="2024-12-31" onChange={dateUpdate}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit" onClick={props.onSaved}>Save Expense</button>
                </div>
            </div>

        </form>
    )
}

export default NewExpenseform