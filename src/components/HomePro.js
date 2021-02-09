import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import NavbarNew from "./Proyectos/NavbarNew";
import { BrowserRouter } from "react-router-dom";
import DropdownPro from "./Proyectos/DropdownPro";
import ReactComp from "./Proyectos/ReactComp";
import Mern from "./Proyectos/Mern";
import Flutter from "./Proyectos/Flutter";
import Django from "./Proyectos/Django";
import Next from "./Proyectos/Next";
import JavaScript from "./Proyectos/JavaScript";

function HomePro() {
  const [isOpenY, setIsOpenY] = useState(false);
  const toggleY = () => {
    setIsOpenY(!isOpenY);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpenY) {
        setIsOpenY(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <BrowserRouter>
        <NavbarNew toggleY={toggleY}></NavbarNew>
        <DropdownPro isOpenY={isOpenY} toggleY={toggleY}></DropdownPro>
        <Switch>
          <Route component={Mern} path="/mern " />
          <Route component={ReactComp} path="/react" />
          <Route component={Next} path="/next" />
          <Route component={Flutter} path="/flutter" />
          <Route component={Django} path="/django" />
          <Route component={JavaScript} path="/javascript" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default HomePro;
