import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
  } from 'reactstrap';

import Students from './students/students';
import Grades from './grades/grades';
import Assignments from './assignments/assignments';

class Main extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Main">
        <Router>
            <div className="container">
                <Navbar color="faded" light expand="md">
                  <NavbarBrand href="/">reactstrap</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/students">Students</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/assignments">Assignments</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/grades">Grades</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              <div className="container">
                <Switch>
                    <Route path="/students" component={Students}/>
                    <Route path="/grades" component={Grades}/>
                    <Route path="/assignments" component={Assignments}/>
                    <Route component={Assignments}/>
                </Switch>
              </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default Main;
