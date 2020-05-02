import React from 'react';
import GalleryModal from './GalleryModal';
import Top from './Top';
import shiraicon from '../assets/shira/shira-icon.png';
import './Shira.css';

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
      ],
      navitems: [
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
       ],
      iconSrc: {src: shiraicon,
                alt: "Shira",
                pname: "Shira"}
    };
  }

  render() {
  	return (
      <div className="person-container">        
        <Top topicon={this.state.iconSrc} navitems={this.state.navitems} />
        <section id="main">
          <GalleryModal images={this.state.drawings} />
        </section>
  	  </div>);
  }
}

export default Shira;


