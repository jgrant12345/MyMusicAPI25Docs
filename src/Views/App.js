import React from "react";
import { SideBarContents } from "../Components/SideBar/SideBarContents";
import SideBar from "../Components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const listOfItems = [1,2,3,4].map((number) => {
    return(
      <div key = {number.toString()}>
        {number}
      </div>)
  })
  return (
    <div className="App">
      <SideBar myprop={["hello"]} />
      <Router>
        <div>
       

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path = "/hello">
              <div>whatisnotworking</div>
            </Route>
            {SideBarContents.map((element) => {
              console.log(element);
              return(
                <Route path={element}>
               <div>{element}</div>
              </Route>
              )
             
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
