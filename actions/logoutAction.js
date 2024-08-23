//rrd
import { redirect } from "react-router-dom";
//helpers
import { deleteItem } from "../helpers";
export const logoutAction = async () => {
    //delete user
    deleteItem({key:"userName"});
    //return redirect
    return redirect("/");
};
