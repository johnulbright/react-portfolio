import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import Home from './Home';
import Past from './Past';
import Present from './Present';
import Future from './Future';
const Header=()=>{
    return(
        <div>
            <Typography variant = 'h1'>John Ulbright</Typography>
            <Router>
      <div>
        
              <Link to="/">Home</Link>
              <Link to="/Past">Past</Link>
              <Link to="/present">Present</Link>
              <Link to="/future">Future</Link>
        <Switch>
          <Route path="/past">
            <Past />
          </Route>
          <Route path="/present">
            <Present />
          </Route>
           <Route path="/future">
            <Future />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
    )
}

export default Header