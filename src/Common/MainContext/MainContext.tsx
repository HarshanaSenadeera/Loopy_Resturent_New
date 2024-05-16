import React from "react";
import {Route, Routes} from "react-router-dom";
import ImgMediaCard from "../../componenet/dishes/dishes";
import {DishesMain} from "../Page/MainDishPage/DishesMain";
import {DashMain} from "../Page/MainDashBord/DashMain";
import dishes from "../../componenet/dishes/dishes";
import user from "../../componenet/userDetails/user"
import ReportMain from "../MainReports/Report";
import {HotDishes} from "../../componenet/dishes/SubDishes/HotDishes/HotDishes";
import ButtonBaseDemo from "../../componenet/dishesNew/DisNew";

import OrderTable from "../../componenet/OrderTable/OrderTable";
import EditDishModal from "../../componenet/EditDish/EditDish";
import {Buyers} from "../../componenet/Byers/Byer";
import {CartProvider} from "../../componenet/dishes/SubDishes/CartProvider";
import {ColdDishes} from "../../componenet/dishes/SubDishes/ColdDishes/ColdDishes";
import FullFeaturedCrudGrid from "../../componenet/OrderTable/OrderTable";
import {DefaultLayout} from "../Default Layout/DefaultLayout";
import AddNewDish from "../AddDishes/AddDish";
import SettingMain from "../Page/Settings/Setting";
import {OrderProvider} from "../Page/Settings/OrderProvider";
import OrderPage from "../../componenet/dishes/Card/CardDetaiils/OrderPage";

import {Invoice} from "../../componenet/Invoice/Invoice";


export const MainContext = () => {
    return (
        <div>
            <OrderProvider>
                <CartProvider>
                    <Routes>
                        <Route path="/" Component={DashMain}></Route>
                        <Route path="/dish" Component={ButtonBaseDemo}></Route>
                        <Route path="/user" Component={user}></Route>
                        <Route path="/report" Component={ReportMain}></Route>
                        <Route path="/byer" Component={Buyers}></Route>
                        <Route path="/hotDish" Component={HotDishes}></Route>
                        <Route path="/coldDish" Component={ColdDishes}></Route>
                        <Route path="/orderTable" Component={FullFeaturedCrudGrid}></Route>
                        <Route path="/addNewDish" Component={AddNewDish}></Route>
                        <Route path="/setting" Component={SettingMain}></Route>
                        <Route path="/order" Component={OrderPage}></Route>
                        <Route path="/invoice" Component={Invoice}></Route>
                    </Routes>
                </CartProvider>
            </OrderProvider>

        </div>
    );
};
