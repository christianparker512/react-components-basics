import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2021,7,28);
    const expenseTitle = 'Udemy Courses';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOSTring()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
