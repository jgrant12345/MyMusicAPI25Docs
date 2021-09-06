import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarContainer, RightSideContent, Basic2 } from "./AppStyles";
import { SideBarContents } from "../Components/SideBar/SideBarContents";
import SideBar from "../Components/SideBar/SideBar";
function App() {
  return (
    <body>
      {/* SideBar */}
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <RightSideContent> 
          {SideBarContents.map((element) => {
            const path = '/' + element;
            return (
              <div>{element}</div>
            );
          })}
      </RightSideContent>
    </body>
  );
}

export default App;
