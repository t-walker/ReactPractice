import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Students from './students';
import Grades from './grades';
import Assignments from './assignments';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Router>
            <div>
            <Link to="/students">Students</Link>{' '}
            <Link to="/grades">Grades</Link>{' '}
            <Link to="/assignments">Assignments</Link>{' '}
                <Switch>
                    <Route path="/students" component={Students}/>
                    <Route path="/grades" component={Grades}/>
                    <Route component={Assignments}/>
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default Main;
