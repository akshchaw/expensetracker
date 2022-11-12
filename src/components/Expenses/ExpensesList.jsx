import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }
    return <ul className="expenses-list">
        <li>
            {props.items.map(entry =>
                <ExpenseItem key={entry.id} title={entry.title} date={entry.date} amount={entry.amount}/>)}
        </li>
    </ul>;
}
export default ExpensesList