import { useEffect, useState } from "react";

const defaultIncomeTransaction = {
  category: "Salary",
  amount: "",
  date: "",
};

const defaultExpensesTransaction = {
  category: "Education",
  amount: "",
  date: "",
};

const SubmissionForm = ({
  onSaveExpense,
  expensesToUpdate,
  onSaveIncome,
  incomesToUpdate,
  transactionType,
  handleTransactionType,
}) => {
  const [income, setIncome] = useState({
    ...defaultIncomeTransaction,
    id: crypto.randomUUID(),
  });
  const [expense, setExpense] = useState({
    ...defaultExpensesTransaction,
    id: crypto.randomUUID(),
  });

  useEffect(() => {
    if (incomesToUpdate) {
      setIncome((prevIncome) => ({
        ...prevIncome,
        ...incomesToUpdate,
      }));
      setIsAddIncome(false);
    }
  }, [incomesToUpdate]);

  useEffect(() => {
    if (expensesToUpdate) {
      setExpense((prevExpense) => ({
        ...prevExpense,
        ...expensesToUpdate,
      }));
      setIsAddExpense(false);
    }
  }, [expensesToUpdate]);

  const [isAddIncome, setIsAddIncome] = useState(true);
  const [isAddExpense, setIsAddExpense] = useState(true);

  const handleChangeIncome = (evt) => {
    const { name, value } = evt.target;
    setIncome((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeExpense = (evt) => {
    const { name, value } = evt.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (transactionType === "Expense") {
      onSaveExpense(expense, isAddExpense); // Call the save function
      setExpense({
        ...defaultExpensesTransaction,
        id: crypto.randomUUID(), // Reset the form with a new ID for new entries
      });
      setIsAddExpense(true); // Reset the flag for a new transaction
    } else {
      onSaveIncome(income, isAddIncome); // Call the save function
      setIncome({
        ...defaultIncomeTransaction,
        id: crypto.randomUUID(), // Reset the form with a new ID for new entries
      });
      setIsAddIncome(true); // Reset the flag for a new transaction
    }
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              transactionType === "Expense" ? "active" : ""
            }`}
            onClick={() => handleTransactionType("Expense")}
          >
            Expense
          </div>
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              transactionType === "Income" ? "active" : ""
            }`}
            onClick={() => handleTransactionType("Income")}
          >
            Income
          </div>
        </div>

        {transactionType === "Expense" ? (
          <>
            <div className="mt-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  value={expense.category}
                  onChange={handleChangeExpense}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                >
                  <option>Education</option>
                  <option>Food</option>
                  <option>Health</option>
                  <option>Bill</option>
                  <option>Insurance</option>
                  <option>Tax</option>
                  <option>Transport</option>
                  <option>Telephone</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  autoComplete="off"
                  placeholder="12931"
                  value={expense.amount}
                  onChange={handleChangeExpense}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={expense.date}
                  autoComplete="off"
                  onChange={handleChangeExpense}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="mt-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  value={income.category}
                  onChange={handleChangeIncome}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                >
                  <option>Salary</option>
                  <option>Outsourcing</option>
                  <option>Bond</option>
                  <option>Dividend</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={income.amount}
                  onChange={handleChangeIncome}
                  autoComplete="off"
                  placeholder="12931"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={income.date}
                  autoComplete="off"
                  onChange={handleChangeIncome}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
            >
              Save
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SubmissionForm;
