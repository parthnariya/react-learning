import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
export default function Expense(props) {
    const expenses = props.expenses
    // console.log(expenses)
    return (
        <Card className='expenses'>
            <ExpenseItem title={expenses[0].title}  amount={expenses[0].amount} date={expenses[0].date} />
        </Card>
    )
}
