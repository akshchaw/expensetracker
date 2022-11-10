import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import {useState} from "react";

const Expenses = (props) => {

    let expenses = props.expenses
    const [filterYear, setFilterYear] = useState('2020')

    const onExpenseFilterHandler = selectedYear => {
        setFilterYear(selectedYear)

    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filterYear} onSelectedYear={onExpenseFilterHandler}/>
                {expenses.map(entry => {
                    return <ExpenseItem title={entry.title} date={entry.date} amount={entry.amount}/>
                })}
            </Card>
        </div>
    )
}

export default Expenses;