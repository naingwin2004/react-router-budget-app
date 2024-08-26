// rrd imports
import { useLoaderData, useNavigate,Link } from "react-router-dom";
//react-toastify
import { toast } from "react-toastify";
// component imports
import Table from "../components/Table";
//icon
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

// helpers
import { fetchData, deleteItem } from "../helpers";

// loader
export async function expensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
}
//action
export async function expensesAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "deleteExpense") {
        try {
            deleteItem({
                key: "expenses",
                id: values.expenseId
            });
            return toast.success("Expense deleted!");
        } catch (e) {
            throw new Error("There was a problem deleting your expense.");
        }
    }
}

const ExpensesPage = () => {
    const navigate = useNavigate();
    const { expenses } = useLoaderData();

    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <h2>
                        Recent Expenses <small>({expenses.length} total)</small>
                    </h2>
                    <Table expenses={expenses} />
                </div>
            ) : (
                <p>No Expenses to show</p>
            )}
            <div className="center">
                <button className="btn btn--dark" onClick={() => navigate(-1)}>
                    <ArrowUturnLeftIcon width={20} />
                    <span>Go Back</span>
                </button>
                <Link to="/" className="btn btn--dark">
                    <HomeIcon width={20} />
                    <span>Go home</span>
                </Link>
            </div>
        </div>
    );
};

export default ExpensesPage;
