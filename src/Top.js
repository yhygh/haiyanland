import React from 'react';
import bread from './bread.png';
import './Top.css';

const items = [
  	{name: 'Haiyan',
  	 page: 'Haiyan Page',
  	 img: './assets/haiyan/city.png'
    },
  	{name: 'Shira',
  	 page: 'Shira Page',
  	 img: './assets/shira/running.jpg'
    }
  ];

class Top extends React.Component {
  render() {
  	return (
      <nav>
        <div className="container">
            <div id="bread-icon">
                <img src={bread} className="bread-img bread-logo"/>
            </div>
	  		<div id="navbar">
	  		  <ul id="topitem">
	              {
	              	items.map((person, index) => (
	              		<li className="person" key={index}>
	              		  <p>{person.name}'s World</p>
	              		</li>
	              	))
	              }
	  		  </ul>
	  		</div>
  		</div>
  	  </nav>);
  }

}

export default Top;