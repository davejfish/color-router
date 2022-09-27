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
          <li>
            <NavLink className='red' to='/rgb/166/28/60'>
              Vivid Burgundy
            </NavLink>
          </li>
          <li>
            <NavLink className='green' to='/rgb/58/183/149'>
              Mountain Meadow
            </NavLink>
          </li>
          <li>
            <NavLink className='blue' to='/rgb/104/116/232'>
              Medium Slate Blue
            </NavLink>
          </li>
        </ul>
      </header>
      <div className='main'>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/rgb/:r/:g/:b'><Color /></Route>
          <Route component={NotFound} path='*' />
        </Switch>
      </div>
    </Router>
  );
}