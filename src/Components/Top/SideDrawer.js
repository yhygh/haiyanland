import React from 'react';
import {
  Link
} from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }  

  return (
    <div className={drawerClasses}>
      <ul>
        {
          props.navitems.map((interest, index) => (
            <li key={index}>
            <Link to={"/"+ props.topicon.pname + interest.link}>{interest.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default sideDrawer;



