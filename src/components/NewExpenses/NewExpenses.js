import React, { useState } from "react";
import './NewExpenses.css'
import NewExpenseform from './NewExpenseform'

const NewExpenses = (props) => {
    const savedExpenses = (savedData) => {
        const dataObject = {
            ...savedData,
            pid: Math.random().toString()
        }
        props.onpassData(dataObject)
        // console.log(dataObject)
    }
    const [addexpense, setaddexpense] = useState(false)
    function addingexpense() {
        setaddexpense(true)
        // console.log("clicked")
    }
    function cancelhandler()
    {
        setaddexpense(false)
    }
    function savingexpense(){
        setaddexpense(false)
    }
    return (
        <div className="new-expense">
            {!addexpense && <button onClick={addingexpense}>Add expenses</button>}
            {addexpense && <NewExpenseform onSavedExpenses={savedExpenses} onCancel={cancelhandler} onSaved={savingexpense}/>}
        </div>
    )
}

export default NewExpenses