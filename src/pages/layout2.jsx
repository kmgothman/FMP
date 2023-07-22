import React from 'react';
import {Outlet} from "react-router-dom"
import Homepage from "./homepage"

function Layout2() {
	return(
      <div className="App">
      	<Homepage/>
      </div>
	);
}

export default Layout2;