import React from 'react';
import "./Nav.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
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
      <div className="nav-bar">
        <Navbar  light expand="md">
        <NavLink href="/"><h1 className="brand"><img className="logo" src="/box3.png" alt="logo"/>GARAGE TRADER</h1></NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" href="/home"> Browse Items </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/garage"> Your Garage</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
