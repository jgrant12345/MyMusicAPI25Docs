import React, { useState } from 'react';
import './App.css';
import { GettingStarted } from '../Components/GettingStartedStyles.js/GettingStarted';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SideBarContainer, RightSideContent, VerticalLine, AppContainer } from './AppStyles';
import { APIDetails } from '../Components/APIDetails/APIDetails';
import Table from '../Components/Table/Table';
import { SideBarContents } from '../Components/SideBar/SideBarContents';
import SideBar from '../Components/SideBar/SideBar';
const BandParams = [{Name: "BandName", Description: "This is the description"},{Name: "2", Description: "This is the description 2"}]
function App() {
  return (
    <AppContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <VerticalLine />
      <RightSideContent>
        <GettingStarted id = "Bands"/>
        <APIDetails
          RouteName="https://mymusicapi25.herokuapp.com/v1/bands/&#123;BandName&#125;"
          Header="Bands"
          ParameterList = {BandParams}
          
        />

<div id="band1">
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
  <a href="#band2">Click Me to Smooth Scroll to Section 2 Below</a>
  <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div>

<div id="band2">
  <h2>Section 2</h2>
  <a href="#Bands">Click Me to Smooth Scroll to Section 1 Above</a>
</div>
        
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div> <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>

      </RightSideContent>
    </AppContainer>
  );
}

export default App;
