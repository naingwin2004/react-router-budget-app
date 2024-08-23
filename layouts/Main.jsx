// rrd imports
import { useLoaderData, Outlet } from "react-router-dom";

//  helper functions
import { fetchData } from "../helpers.js";

//assets
import wave from "../src/assets/wave.svg";

//components
import Nav from "../components/Nav";

// loader
export function mainLoader() {
    const userName = "NaingWin";
    return { userName };
}

const Main = () => {
    const { userName } = useLoaderData();
    return (
        <div className="layout">
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={wave} />
        </div>
    );
};

export default Main;
