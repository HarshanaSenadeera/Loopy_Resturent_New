import React from "react";
import {Route, Routes} from "react-router-dom";
import ImgMediaCard from "../../componenet/dishes/dishes";
import {DishesMain} from "../Page/MainDishPage/DishesMain";
import {DashMain} from "../Page/MainDashBord/DashMain";
import dishes from "../../componenet/dishes/dishes";
import user from "../../componenet/userDetails/user"
import ReportMain from "../MainReports/Report";
import {Byers} from "../../componenet/Byers/Byer";
import ButtonBaseDemo from "../../componenet/dishesNew/DisNew";
import { HotDishes } from "../../componenet/dishes/SubDishes/HotDishes/HotDishes";
import { ColdDishes } from "../../componenet/dishes/SubDishes/ColdDishes/ColdDishes";
import {CartProvider} from "../../componenet/dishes/SubDishes/CartProvider";

export const MainContext = () => {
    return (
        <div>
            <CartProvider>

            <Routes>

                <Route path="/" Component={DashMain}></Route>
                <Route path="/dish" Component={ButtonBaseDemo}></Route>
                <Route path="/user" Component={user}></Route>
                <Route path="/report" Component={ReportMain}></Route>
                <Route path="/byer" Component={Byers}></Route>
                    <Route path="/hotDish" Component={HotDishes}></Route>
                    <Route path="/coldDish" Component={ColdDishes}></Route>



            </Routes>
            </CartProvider>
        </div>
    );
};
