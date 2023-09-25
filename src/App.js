import React,{useState} from "react";
import ShowExpenses from "./components/Expenses/ShowExpenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [Expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const passedData=(incomingdata)=>{
          setExpenses(prevExpense=>[...prevExpense,incomingdata])
  }
  return (
    <div>
      <NewExpenses onpassData={passedData}/>
      <ShowExpenses list={Expenses}/>
    </div>
  );
  
}

export default App;
