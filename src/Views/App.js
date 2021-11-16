import React, { useState } from 'react';
import './App.css';
import { GettingStarted } from '../Components/GettingStartedStyles.js/GettingStarted';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SideBarContainer, RightSideContent, VerticalLine } from './AppStyles';
import { APIDetails } from '../Components/APIDetails/APIDetails';
import Table from '../Components/Table/Table';
import { SideBarContents } from '../Components/SideBar/SideBarContents';
import SideBar from '../Components/SideBar/SideBar';
const BandParams = [{Name: "BandName", Description: "This is the description"},{Name: "2", Description: "This is the description 2"}]
function App() {
  return (
    <div>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <VerticalLine />
      <RightSideContent>
        <GettingStarted />
        <APIDetails
          RouteName="https://mymusicapi25.herokuapp.com/v1/bands/&#123;BandName&#125;"
          Header="Bands"
          ParameterList = {BandParams}
          
        />
      </RightSideContent>
    </div>
  );
}

export default App;
