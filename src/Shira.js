import React from 'react';
import GalleryModal from './Component/GalleryModal';
import shiraicon from './assets/shira/shira-icon.png';
import './Shira.css';

const navitems = [
  	{name: 'Smile',
  	 page: 'Haiyan Page',
    },
  	{name: 'Food',
  	 page: 'Shira Page',
    },
    {
      name: 'Drawings',
      page: 'Travel page',
    },
    {
      name: 'Coming up',
      page: 'Feature Page',  
    }
  ];

/*
        <nav>    
          <ul id="topitem">
                {
                  navitems.map((interest, index) => (
                    <li className="person" key={index}>
                      <p>{interest.name}</p>
                    </li>
                  ))
                }
          </ul>
        </nav>
*/

class Shira extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      drawings: [
        {src:"one.jpg", alt:"No Title"},
        {src:"two.jpg", alt:"No Title"},
        {src:"twoandhouse.jpg", alt:"No Title"},  
        {src:"twoandletter.jpg", alt:"No Title"},
        {src:"three.jpg", alt:"No Title"},
        {src:"toothache.jpg", alt:"Toothache"},  
        {src:"unfinished.jpg", alt:"Unfinished"},  
        {src:"oneandthree.jpg", alt:"No Title"},
        {src:"running.jpg", alt:"Walking on Street"},
        {src:"four.jpg", alt:"No Title"},
        {src:"family.jpg", alt:"Mommy Daddy and Me"},
        {src:"many.jpg", alt:"No Title"},
        {src:"flyingman.jpg", alt:"No Title"},
        {src:"flyingXiannv.jpg", alt:"No Title"},
        {src:"garageman.jpg", alt:"Car in Garage"},
        {src:"ourhouse.jpg", alt:"Our House: Kitchen, Bedrooms and Garage"}
      ]
    };
  }

  render() {
  	return (
      <div className="person-container">
        <div className="person-icon-title-container">
          <div id="person-icon-container">
            <img src={shiraicon} className="person-img" alt="Shira"/>
          </div>
          <div className="person-title">
             <p>Shira's World</p>
          </div>
        </div>

        <section id="main">
          <GalleryModal images={this.state.drawings}/>
        </section>
  	  </div>);
  }
}

export default Shira;

