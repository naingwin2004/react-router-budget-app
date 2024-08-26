//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//lb toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//layouts
import Main, { mainLoader } from "../layouts/Main";
//Actions
import { logoutAction } from "../actions/logoutAction";
import { deleteBudget } from "../actions/deleteBudget";
//routes
import Dashboard, {
    dashboardLoader,
    dashboardAction
} from "../pages/Dashboard";
import ExpensesPage, {
    expensesLoader,
    expensesAction
} from "../pages/ExpensesPage";
import Error from "../pages/Error";
import BudgetPage, { budgetLoader, budgetAction } from "../pages/BudgetPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: mainLoader,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Dashboard />,
                loader: dashboardLoader,
                action: dashboardAction,
                errorElement: <Error />
            },
            {
                path: "expenses",
                element: <ExpensesPage />,
                loader: expensesLoader,
                action: expensesAction,
                errorElement: <Error />
            },
            {
                path: "budget/:id",
                element: <BudgetPage />,
                loader: budgetLoader,
                action: budgetAction,
                errorElement: <Error />,
                children:[
                  {path:"delete",
                    action:deleteBudget
                  }
                  ]
            },

            { path: "logout", action: logoutAction }
        ]
    }
]);
const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
            <ToastContainer />
        </div>
    );
};

export default App;
