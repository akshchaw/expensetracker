import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const startIsEditingHandler = () => {
        setIsEditing(true)
    }

    const stopIsEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button className='new-expense__actions' onClick={startIsEditingHandler}>Add new Expense</button>)}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={stopIsEditingHandler}/>)}
        </div>
    )
}

export default NewExpense;