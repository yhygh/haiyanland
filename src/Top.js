import React from 'react';
import bread from './bread.png';
import './Top.css';
import {Link} from 'react-router-dom';

const items = [
  	{name: 'Haiyan',
  	 page: '/haiyan',
  	 img: './assets/haiyan/city.png'
    },
  	{name: 'Shira',
  	 page: '/shira',
  	 img: './assets/shira/running.jpg'
    }
  ];

class Top extends React.Component {
  render() {
  	  console.log(this.props.location);
  	  console.log(this.props.match);
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
	              		  <Link to={person.page}>{person.name}'s World</Link>
	              		  <button
	              		    onClick={ () => {
                              // api call
                              // change to a different page
                              this.props.history.push('/haiyan');
	              		    } }> 
	              		    Click me to go to {person.name}
	              		  </button>

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