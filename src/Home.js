import React from 'react';
import bread from './bread.png';
import './Home.css';
import {Link} from 'react-router-dom';

const items = [
    {name: 'Shira',
     page: '/shira',
    },
    {name: 'Haiyan',
     page: '/haiyan',
    }    
  ];

class Home extends React.Component {
  render() {
  	return (
      <div className="Home-container">
        <div className="Home-title">Welcome to Our Land!</div>
        <div>
          <img src={bread} className="Home-bread-img Home-bread-logo" alt="Bread"/>
        </div>
        <ul id="home-personitem">
          {
            items.map((person, index) => (
              <li key={index}>
                <Link to={person.page}>{person.name}</Link>
              </li>
            ))
          }
        </ul>
        <div>Birth of this Website</div>
      </div>

    );
     
  }

}

export default Home;