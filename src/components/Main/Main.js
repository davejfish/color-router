import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Color from '../Color/Color';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

import './Main.css';

export default function Main() {
  return (
    <Router>
      <header>
        <ul>
          <NavLink className='red' to='/rgb/166/28/60'>
            Vivid Burgundy
          </NavLink>
          <NavLink className='green' to='/rgb/58/183/149'>
            Mountain Meadow
          </NavLink>
          <NavLink className='blue' to='/rgb/104/116/232'>
            Medium Slate Blue
          </NavLink>
        </ul>
      </header>
      <div className='main'>
        <Switch>
          <Route exact path='/'>{Home}</Route>
          <Route path='/:r/:g/:b'>{Color}</Route>
          <Route path='*'>{NotFound}</Route>
        </Switch>
      </div>
    </Router>
  );
}