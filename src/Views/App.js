import React from "react";
import { SideBarContents } from "../Components/SideBar/SideBarContents";
import SideBar from "../Components/SideBar/SideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SideBar myprop = {["hello"]}/>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {SideBarContents.forEach(element => {
              console.log(element)
            })}
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>

  );
}

export default App;
