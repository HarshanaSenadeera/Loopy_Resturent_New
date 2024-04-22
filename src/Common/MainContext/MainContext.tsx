import React from "react";
import {Route, Routes} from "react-router-dom";
import ImgMediaCard from "../../componenet/dishes/dishes";
import {DishesMain} from "../Page/MainDishPage/DishesMain";
import {DashMain} from "../Page/MainDashBord/DashMain";
import dishes from "../../componenet/dishes/dishes";
import user from "../../componenet/userDetails/user"
import ReportMain from "../MainReports/Report";

export const MainContext = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={DashMain}></Route>
                <Route path="/dish" Component={dishes}></Route>
                <Route path="/user" Component={user}></Route>
                <Route path="/report" Component={ReportMain}></Route>
            </Routes>
        </div>
    );
};
