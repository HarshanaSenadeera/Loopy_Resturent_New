import React from "react";
import {Route, Routes} from "react-router-dom";
import ImgMediaCard from "../../componenet/dishes/dishes";
import {DishesMain} from "../Page/MainDishPage/DishesMain";

export const MainContext = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={DishesMain}></Route>
                {/*<Route path="/tourClick" Component={TourClick}></Route>
                <Route path="/tourBooking" Component={TourBooking}></Route>
                <Route path="/aboutUS" Component={Aboutus}></Route>
                <Route path="/login" Component={LoginForm}></Route>*/}


            </Routes>
        </div>    );
};