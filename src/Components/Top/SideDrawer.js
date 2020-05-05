import React from 'react';
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
             <a href="/">{interest.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default sideDrawer;



