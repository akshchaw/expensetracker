import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020')

    const onExpenseFilterHandler = selectedYear => {
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filterYear} onSelectedYear={onExpenseFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;