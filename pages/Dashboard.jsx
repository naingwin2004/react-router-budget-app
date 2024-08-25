// rrd imports
import { useLoaderData } from "react-router-dom";
//react-toastify
import { toast } from "react-toastify";
//  helper functions
import { fetchData, createBudget,createExpense } from "../helpers";
// components
import Intro from "../components/Intro";
import BudgetItem  from "../components/BudgetItem";

import BudgetForm from "../components/BedgetForm";
import ExpenseForm from "../components/ExpenseForm";
// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets };
}
//actions
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName));
            return toast.success(`Welcome ${values.userName}`);
        } catch (e) {
            throw new Error("Three is a problem creating your account");
        }
    }
    if (_action === "createBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            });
            return toast.success("Budget created!");
        } catch (e) {
            throw new Error("There was a problem creating your budget.");
        }
    }
    if (_action === "createExpense") {
      createExpense({
        name:values.newExpense,
        amount:values.newExpenseAmount,
        budgetId:values.newExpenseBudget
      })
        try {
            return toast.success(`Expense ${values.newExpense} created!`);
        } catch (e) {
            throw new Error("There was a problem creating your budget.");
        }
    }
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData();
    return (
        <div>
            {/* {localStorage.setItem("userName", '"NaingWin"')}*/}
            {/*{localStorage.removeItem("budgets")}*/}
            {userName ? (
                <div className="dashboard">
                    <h1>
                        Welcome back, <span className="accent">{userName}</span>
                    </h1>
                    <div className="grid-sm">
                        {budgets && budgets.length > 0 ? (
                            <div className="grid-lg">
                                <div className="flex-lg">
                                    <BudgetForm />
                                    <ExpenseForm />
                                </div>
                                <h2>Existing Budgets</h2>
                               <div className="budgets"> 
                               {budgets.map(budget=>(<BudgetItem key={budget.id} budget={budget}/>))}
                               </div> 
                            </div>
                        ) : (
                            <div className="grid-sm">
                                <p>
                                    Personal budgeting is the secret to
                                    financial freedom.
                                </p>
                                <p>Create a budget to get started!</p>
                                <BudgetForm />
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Intro />
            )}
        </div>
    );
};

export default Dashboard;
