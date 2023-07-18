import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../components/navigation/navigation"

import { LayoutContainer } from './layout.styles';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	return(
      <LayoutContainer>
        <Navigation signOut={this.props.signOut} />
        <Outlet />
      </LayoutContainer>
	);
  }
}

export default Layout;