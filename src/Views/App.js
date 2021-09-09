import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarContainer, RightSideContent, VerticalLine } from "./AppStyles";
import Table from "../Components/Table/Table";
import { SideBarContents } from "../Components/SideBar/SideBarContents";
import SideBar from "../Components/SideBar/SideBar";
function App() {
  return (
    <div>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <RightSideContent>
        <VerticalLine />
        <Table header = "header" body = "body" />
        {/* {SideBarContents.map((element) => {
          const path = "/" + element;
          return <div key={path}>{element}</div>;
        })} */}
      </RightSideContent>
    </div>
  );
}

export default App;
