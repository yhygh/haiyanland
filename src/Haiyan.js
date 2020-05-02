import React from 'react';
import bread from './bread.png';
import './Top.css';
import GalleryModal from './Component/GalleryModal';

const items = [
  	{name: 'Technology',
  	 page: 'Haiyan Page',
  	 img: './assets/haiyan/city.png'
    },
    {
      name: 'Exercise',
      page: 'Travel page',
      img: './assets/haiyan/city.png'
    },    
  	{name: 'Food',
  	 page: 'Shira Page',
  	 img: './assets/shira/running.jpg'
    },
    {
      name: 'Travel',
      page: 'Travel page',
      img: './assets/haiyan/city.png'
    },
    {
      name: 'Upcoming Features',
      page: 'Feature Page',
      img: './assets/haiyan/city.png'      
    }
  ];

class Haiyan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: [
        {src:"one.jpg", alt:"Drawings"},
        {src:"two.jpg", alt:"Drawings"},
      ]
    };
  }


  render() {
  	return (
      <div>
        <nav>
          <div className="container">
              <div id="bread-icon">
                  <img src={bread} className="bread-img bread-logo" alt="bread"/>
              </div>
  	  		<div id="navbar">
  	  		  <ul id="topitem">
  	              {
  	              	items.map((interest, index) => (
  	              		<li className="person" key={index}>
  	              		  <p>{interest.name}</p>
  	              		</li>
  	              	))
  	              }
  	  		  </ul>
  	  		</div>
    		</div>
    	  </nav>

        <GalleryModal images={this.state.dishes}/>

      </div>);
  }

}

export default Haiyan;