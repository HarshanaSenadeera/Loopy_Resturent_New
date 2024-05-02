import React from 'react';

import NavBarTop from "./componenet/navbar/Navbar";
import ClippedDrawer from "./componenet/navbar/nav";
import ResponsiveDrawer from "./componenet/navbar/nav";
import ImgMediaCard from "./componenet/dishes/dishes";
import {DefaultLayout} from "./Common/Default Layout/DefaultLayout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from "./componenet/loging/loging";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/*" Component={DefaultLayout} ></Route>
              </Routes>
          </BrowserRouter>
      </>



  );
}

export default App;
