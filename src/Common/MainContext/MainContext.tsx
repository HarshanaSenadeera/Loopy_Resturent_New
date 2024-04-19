import React from "react";
import {Route, Routes} from "react-router-dom";
import ImgMediaCard from "../../componenet/dishes/dishes";
import {DishesMain} from "../Page/MainDishPage/DishesMain";
import {DashMain} from "../Page/MainDashBord/DashMain";

export const MainContext = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={DashMain}></Route>
              {/*  <Route path="/tourBooking" Component={TourBooking}></Route>
                <Route path="/aboutUS" Component={Aboutus}></Route>
                <Route path="/login" Component={LoginForm}></Route>*!/
*/}

            </Routes>
        </div>    );
};