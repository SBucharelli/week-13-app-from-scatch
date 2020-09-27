import './App.css'
import Home from './components/Home'
import FirstTrimester from './components/FirstTrimester'
import SecondTrimester from './components/SecondTrimester'
import ThirdTrimester from './components/ThirdTrimester'
import SingleWeek from './components/SingleWeek'
import ErrorPage from './components/ErrorPage'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Dasbhoard() {
  return (
    <Router>
      <div className='pageContent'>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/firstTrimester">First Trimester</Link></span>
        <span><Link to="/secondTrimester">Second Trimester</Link></span>
        <span><Link to="/thirdTrimester">Third Trimester</Link></span>
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FirstTrimester" component={FirstTrimester} />
          <Route path="/SecondTrimester" component={SecondTrimester} />
          <Route path="/ThirdTrimester" component={ThirdTrimester} />
          <Route path="/weeks" component={SingleWeek} />
          <Route path="*" component={ErrorPage} />
          <Route path="/FirstTrimester/*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}
