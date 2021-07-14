import ExpenseItem from './components/ExpenseItem';
import expenses from './components/expenses.txt';

function App() {
  return (
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem>
            title={expenses[0].title}
            amount{expenses[0].amount}
            date={expenses[0].date}
        </ExpenseItem>
          <ExpenseItem>
              title={expenses[1].title}
              amount{expenses[1].amount}
              date={expenses[1].date}
          </ExpenseItem>
          <ExpenseItem>
              title={expenses[2].title}
              amount{expenses[2].amount}
              date={expenses[2].date}
          </ExpenseItem>

      </div>
  );
}

export default App;
