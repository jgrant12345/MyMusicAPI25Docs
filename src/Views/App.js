import React, { useState } from 'react';
import './App.css';
import { GettingStarted } from '../Components/GettingStartedStyles.js/GettingStarted';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SideBarContainer, RightSideContent, VerticalLine, AppContainer } from './AppStyles';
import { APIDetails } from '../Components/APIDetails/APIDetails';
import SideBar from '../Components/SideBar/SideBar';
const BandParams = [{Name: "BandName", Description: "This is the name of the Band that is going to be searched"}]
const SongParams = [{Name: "Year", Description: "Songs that came out after the specified year. For example, if the year put in is 2005, songs that came out in 2006 and after will be in the output"}]
function App() {
  return (
    <AppContainer >
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <VerticalLine />
      <RightSideContent>
        <GettingStarted scrollId = "GettingStarted"/>
        <APIDetails
          RouteName="https://mymusicapi25.herokuapp.com/v1/bands/&#123;BandName&#125;"
          Header="Bands"
          ParameterList = {BandParams}  
          scrollId = "Bands"      
          sampleEndPointResponse = "https://mymusicapi25.herokuapp.com/v1/bands/Fall Out Boy"
          sampleOutPutResponse = "{&#8220;Songs&#8221;:[{&#8220;Name&#8221;:&#8220;Sugar, We're Goin Down&#8221;,&#8220;YearReleased&#8221;:2005},{&#8220;Name&#8221;:&#8220;Centuries&#8221;,&#8220;YearReleased&#8221;:2014}],&#8220;Artists&#8221;:[&#8220;Patrick Stump&#8221;,&#8220;Pete Wentz&#8221;,&#8220;Andy Hurley&#8221;,&#8220;Joe Trohman&#8221;]}"
        />
         <APIDetails
          RouteName="https://mymusicapi25.herokuapp.com/v1/songs/releasedAfterYear/&#123;Year&#125;"
          Header="Songs"
          ParameterList = {SongParams}  
          scrollId = "Songs"      
          sampleEndPointResponse = "https://mymusicapi25.herokuapp.com/v1/songs/releasedAfterYear/2008"
          sampleOutPutResponse = "{&#8220;Songs&#8221;:[{&#8220;Name&#8221;:&#8220;Centuries&#8221;,&#8220;YearReleased&#8221;:2014},{&#8220;Name&#8221;:&#8220;XO&#8221;,&#8220;YearReleased&#8221;:2016}]&#8221;}"
        />
      </RightSideContent>

    </AppContainer>
  );
}

export default App;
