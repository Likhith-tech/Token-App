import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Generatetoken from "./pages/Generatetoken"
import Validatetoken from "./pages/Validatetoken";
import Appbar from "./layout/Appbar";

function Routes() {
  return (
    <BrowserRouter>
      <Appbar>
        <Route exact path="/" component={Generatetoken} />
        <Route path="/tokenApp/validate" component={Validatetoken} />
      </Appbar> 
    </BrowserRouter>
  );
}

export default Routes;
