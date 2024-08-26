import {
    useLoaderData,
    Form,
    useNavigation,
    useParams
} from "react-router-dom";

import { useRef, useEffect } from "react";

//icon
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const ExpenseForm = () => {
    const { id } = useParams();
    const formRef = useRef();
    const focusRef = useRef();
    const navigation = useNavigation();
    const { userName, budgets = [] } = useLoaderData();

    const isSubmitting = navigation.state === "submitting";

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting]);
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Add New{" "}
                <span className="accent">
                    {!!id ||
                        (budgets.length === 1 &&
                            budgets.map(budg => budg.name))}
                </span>
                Expense
            </h2>
            <Form method="post" className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            placeholder="e.g., Coffee"
                            ref={focusRef}
                            required
                        />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input
                            type="number"
                            step="0.01"
                            inputMode="decimal"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="e.g., 3.50"
                            required
                        />
                    </div>
                </div>
                <div className="grid-xs" hidden={!!id || budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Budget Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget">
                        {budgets
                            .sort((a, b) => a.createdAt - b.createdAt)
                            .map(budget => {
                                return (
                                    <option key={budget.id} value={budget.id}>
                                        {budget.name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
                <button
                    type="submit"
                    className="btn btn--dark"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span>Submitting…</span>
                    ) : (
                        <>
                            <span>Add Expense</span>
                            <PlusCircleIcon width={20} />
                        </>
                    )}
                </button>
            </Form>
        </div>
    );
};
export default ExpenseForm;
