//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import Main, { mainLoader } from "../layouts/Main";
//Actions
import { logoutAction } from "../actions/logoutAction";
//routes
import Dashboard, { dashboardLoader } from "../pages/Dashboard";
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
                loader: dashboardLoader
            },
            { path: "logout", action: logoutAction }
        ]
    }
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
