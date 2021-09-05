import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarContainer } from "./AppStyles";
import { SideBarContents } from "../Components/SideBar/SideBarContents";
import SideBar from "../Components/SideBar/SideBar";
function App() {
  return (
    <div>
      {/* SideBar */}
      <div>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      yeah
      </div>
     

      <Router>
        <div>
          <Switch>
            {SideBarContents.map((element) => {
              const path = "/" + element;
              return (
                <Route key={path} path={path}>
                  <div>{element}</div>
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
