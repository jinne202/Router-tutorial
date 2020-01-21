import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return(
    <div>
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">info</Link></li>
          <li><Link to="/profiles">Profile</Link></li>
          <li><Link to="/history">History예제</Link></li>
        </ul>
      </div>
      <Switch>
      <Route path = "/" component = {Home} exact = {true}/>
      <Route path = {['/about', '/info']} component = {About}/>
      <Route path = "/contact" component = {Contact}/>
      <Route path = "/profiles" component={Profiles}/>
      <Route path = "/history" component={HistorySample}/>
      <Route
        render={({location}) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
      </Switch>
    </div>
  )
}

export default App;
