import { useState } from "react";
import DeleteIcon from "../MySvgIcons/DeleteIcon";
import EditIcon from "../MySvgIcons/EditIcon";
import ExpenseIcon from "../MySvgIcons/ExpenseIcon";
import FilterIcon from "../MySvgIcons/FilterIcon";
import SortingIcon from "../MySvgIcons/SortingIcon";
import NoDataAdded from "./NoDataAdded";

const Expense = ({ expenses, onEdit, onDelete, handleTransactionType }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleSortMenu = () => setIsSortOpen((prev) => !prev);
  const toggleFilterMenu = () => setIsFilterOpen((prev) => !prev);
  const handleSort = (order) => {
    setSortOrder(order);
    setIsSortOpen(false);
  };

  const handleFilterChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Sorting and Filtering logic
  const filteredAndSortedExpenses = expenses
    .filter(
      (expense) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(expense.category)
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.amount - b.amount;
      if (sortOrder === "desc") return b.amount - a.amount;
      return 0;
    });

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <ExpenseIcon />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-expanded={isSortOpen}
              onClick={toggleSortMenu}
            >
              <SortingIcon />
            </button>

            {isSortOpen && (
              <div
                className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    onClick={() => handleSort("asc")}
                  >
                    Low to High
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    onClick={() => handleSort("desc")}
                  >
                    High to Low
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-expanded={isFilterOpen}
              onClick={toggleFilterMenu}
            >
              <FilterIcon />
            </button>

            {isFilterOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1">
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      id="filter-option-1"
                      onChange={() => handleFilterChange("Education")}
                    />
                    <span className="ml-2">Education</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      id="filter-option-2"
                      onChange={() => handleFilterChange("Food")}
                    />
                    <span className="ml-2">Food</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Health")}
                    />
                    <span className="ml-2">Health</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Bill")}
                    />
                    <span className="ml-2">Bill</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Insurance")}
                    />
                    <span className="ml-2">Insurance</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Tax")}
                    />
                    <span className="ml-2">Tax</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Transport")}
                    />
                    <span className="ml-2">Transport</span>
                  </label>
                  <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                      onChange={() => handleFilterChange("Telephone")}
                    />
                    <span className="ml-2">Telephone</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        {filteredAndSortedExpenses.length > 0 ? (
          filteredAndSortedExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {expense.category}
                </h3>
                <p className="text-xs text-gray-600">
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(expense.date))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  BDT {expense.amount}
                </p>

                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <button
                    className="hover:text-teal-600"
                    onClick={() => {
                      onEdit(expense);
                      handleTransactionType("Expense");
                    }}
                    title="Edit Button"
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="hover:text-red-600"
                    onClick={() => onDelete(expense.id)}
                    title="Delete"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoDataAdded sect="expense" />
        )}
      </div>
    </div>
  );
};

export default Expense;
