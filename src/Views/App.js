import React, { useState } from 'react';
import './App.css'
import { GettingStarted } from '../Components/GettingStartedStyles.js/GettingStarted';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SideBarContainer, RightSideContent, VerticalLine } from './AppStyles';
import { Bands } from '../Components/Bands/Bands';
import Table from '../Components/Table/Table';
import { SideBarContents } from '../Components/SideBar/SideBarContents';
import SideBar from '../Components/SideBar/SideBar';
function App() {
  return (
    <div>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <VerticalLine />
      <RightSideContent>
        <GettingStarted />
        <Bands />
      </RightSideContent>
    </div>
  );
}

export default App;
