import React from 'react';
import './Top.css';
import DrawerToggleButton from './DrawerToggleButton';
import {
  Link
} from 'react-router-dom';

class Top extends React.Component {
  render() {
      console.log(`Inside Top, location, match, ...`);
      console.log(this.props.location);
      console.log(this.props.match);
      console.log(this.props.topicon);
    return (
        <section id="top_container">
          <div className="top_header-container">
            <div className="top_drawer-toggle-container">
              <DrawerToggleButton click={this.props.drawerToggleClickHandler}/>
            </div>
            <div className="top_icon-container">
              <img src={this.props.topicon.src} alt={this.props.topicon.alt}/>
            </div>
            <nav className="top_nav-container">
                  <ul className="top_nav-items">
                    {
                      this.props.navitems.map((interest, index) => (
                        <li className="top_person" key={index}>
                          <Link to={this.props.match.url + interest.link}>{interest.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
            </nav>
          </div>
        </section>);
  }
}

export default Top;
