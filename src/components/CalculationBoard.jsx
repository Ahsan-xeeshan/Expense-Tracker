import { useState } from "react";
import Expense from "./Expense";
import Income from "./Income";
import SubmissionForm from "./SubmissionForm";
import TotalBalance from "./TotalBalance";
const CalculationBoard = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [transactionType, setTransactionType] = useState("Expense");
  const [expensesToUpdate, setExpensesToUpdate] = useState(null);
  const [incomesToUpdate, setIncomesToUpdate] = useState(null);

  const totalIncome = incomes.reduce(
    (acc, income) => acc + Number(income.amount),
    0
  );
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );
  const totalBalance = totalIncome - totalExpenses;

  const handleTransactionType = (str) => {
    console.log(str);
    setTransactionType(str);
  };

  function handleAddExpense(newExpense, isAddExpense) {
    if (isAddExpense) {
      setExpenses([...expenses, newExpense]);
    } else {
      setExpenses(
        expenses.map((expense) => {
          if (expense.id === newExpense.id) {
            return newExpense;
          }
          return expense;
        })
      );
    }
  }

  function handleEditExpense(expense) {
    console.log(expense);
    setExpensesToUpdate(expense);
  }

  function handleDeleteExpense(expenseId) {
    const expenseAfterDelete = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(expenseAfterDelete);
  }

  function handleAddIncome(newIncome, isAddIncome) {
    if (isAddIncome) {
      setIncomes([...incomes, newIncome]);
    } else {
      setIncomes(
        incomes.map((income) => {
          if (income.id === newIncome.id) {
            return newIncome;
          }
          return income;
        })
      );
    }
  }

  function handleEditIncome(income) {
    setIncomesToUpdate(income);
  }

  function handleDeleteIncome(incomeId) {
    const incomeAfterDelete = incomes.filter(
      (income) => income.id !== incomeId
    );
    setIncomes(incomeAfterDelete);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SubmissionForm
        onSaveExpense={handleAddExpense}
        expensesToUpdate={expensesToUpdate}
        onSaveIncome={handleAddIncome}
        incomesToUpdate={incomesToUpdate}
        handleTransactionType={handleTransactionType}
        transactionType={transactionType}
      />
      <div className="lg:col-span-2">
        <TotalBalance
          totalBalance={totalBalance}
          totalExpenses={totalExpenses}
          totalIncome={totalIncome}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <Income
            incomes={incomes}
            onEdit={handleEditIncome}
            onDelete={handleDeleteIncome}
            handleTransactionType={handleTransactionType}
          />
          <Expense
            expenses={expenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
            handleTransactionType={handleTransactionType}
          />
        </div>
      </div>
    </section>
  );
};

export default CalculationBoard;
