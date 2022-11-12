import {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // The alternative approach to combine all in one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: '',
    // })

    const titleChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); //to not refresh the values when clicking on submit
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        props.onCancelClick()
        setEnteredDate('')
        setEnteredTitle('')
        setEnteredAmount('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='cancel' onClick={props.onCancelClick}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm