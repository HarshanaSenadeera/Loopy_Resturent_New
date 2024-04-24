import React from "react";
import {Route, Routes} from "react-router-dom";
import {DashMain} from "../Page/MainDashBord/DashMain";
import dishes from "../../componenet/dishes/dishes";
import user from "../../componenet/userDetails/user"
import ReportMain from "../MainReports/Report";
import {Byers} from "../../componenet/Byers/Byer";
import SignIn from "../../componenet/loging/loging";
import ForgotPass from "../../componenet/forgotPass/ForgotPass";
import ButtonBaseDemo from "../../componenet/dishesNew/DisNew";

export const MainContext = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={DashMain}></Route>
                <Route path="/loging" Component={SignIn}></Route>
                <Route path="/forgot" Component={ForgotPass}></Route>
                <Route path="/dish" Component={dishes}></Route>
                <Route path="/dishNew" Component={ButtonBaseDemo}></Route>
                <Route path="/user" Component={user}></Route>
                <Route path="/report" Component={ReportMain}></Route>
                <Route path="/byer" Component={Byers}></Route>
            </Routes>
        </div>
    );
};
