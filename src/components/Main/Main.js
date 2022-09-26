import { Switch, Route, NavLink } from 'react-router-dom';
import Color from '../Color/Color';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

import './Main.css';

export default function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>{Home}</Route>
        <Route path='/:r/:g/:b'>{Color}</Route>
        <Route path='*'>{NotFound}</Route>
      </Switch>
    </div>
  );
}