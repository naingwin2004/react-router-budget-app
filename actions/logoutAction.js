//rrd
import { redirect } from "react-router-dom";
// react-toastify
import { toast } from "react-toastify";
//helpers
import { deleteItem } from "../helpers";
export const logoutAction = async () => {
    //delete user
    deleteItem({ key: "userName" });
    toast.success("You’r deleted your account!");
    //return redirect
    return redirect("/");
};
