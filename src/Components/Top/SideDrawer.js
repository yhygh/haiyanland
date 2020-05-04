import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => (
  <div className="side-drawer">
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


export default sideDrawer;



