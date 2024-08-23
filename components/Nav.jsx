// rrd
import { NavLink, Form } from "react-router-dom";

//icon
import { TrashIcon } from "@heroicons/react/24/solid";
// assets
import logomark from "../src/assets/logomark.svg";
const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-lable="Go to Home">
                <img src={logomark} height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {userName && (
                <Form
                    method="post"
                    action="/logout"
                    onSubmit={e => {
                        if (!confirm("Delete user and all data?")) {
                            e.preventDefault();
                        }
                    }}
                >
                    <button className="btn btn--warning">
                        <span>Delete user</span>
                        <TrashIcon width={30}/>
                    </button>
                </Form>
            )}
        </nav>
    );
};

export default Nav;
