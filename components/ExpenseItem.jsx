import { Link, Form } from "react-router-dom";
// helper imports
import {
    formetCurrency,
    formatDateToLocaleString,
    getAllMatchingItems
} from "../helpers";
//icon
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expense, showBudget = true }) => {
    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId
    })[0];
    return (
        <>
            <td>{expense.name}</td>
            <td>{formetCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            {showBudget ? (
                <td>
                    <Link
                        to={`/budget/${budget.id}`}
                        style={{
                            "--accent": budget.color
                        }}
                    >
                        {budget.name}
                    </Link>
                </td>
            ) : (
                ""
            )}
            <td>
                <Form method="post">
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button
                        type="submit"
                        className="btn btn--warning"
                        aria-label={`Delete ${expense.name} expense`}
                    >
                        <TrashIcon width={20} />
                    </button>
                </Form>
            </td>
        </>
    );
};
export default ExpenseItem;
