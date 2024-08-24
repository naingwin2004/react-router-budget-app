//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//lb toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//layouts
import Main, { mainLoader } from "../layouts/Main";
//Actions
import { logoutAction } from "../actions/logoutAction";
//routes
import Dashboard, {
    dashboardLoader,
    dashboardAction
} from "../pages/Dashboard";
import Error from "../pages/Error";

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
