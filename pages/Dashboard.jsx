// rrd imports
import { useLoaderData } from "react-router-dom";

//  helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName };
}

const Dashboard = () => {
    const { userName } = useLoaderData();
    return (
        <div>
            {/* {localStorage.setItem("userName", '"NaingWin"')}*/}
            <h1>{userName}</h1>Dashboard
        </div>
    );
};

export default Dashboard;
