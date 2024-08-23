// rrd imports
import { useLoaderData } from "react-router-dom";
//react-toastify
import { toast } from "react-toastify";
//  helper functions
import { fetchData, createBudget } from "../helpers";
// components
import Intro from "../components/Intro";
import BudgetForm from "../components/BedgetForm";
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
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData();
    return (
        <div>
            {/* {localStorage.setItem("userName", '"NaingWin"')}*/}
            {userName ? (
                <div className="dashboard">
                    <h1>
                        Welcome back, <span className="accent">{userName}</span>
                    </h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <BudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Intro />
            )}
        </div>
    );
};

export default Dashboard;
