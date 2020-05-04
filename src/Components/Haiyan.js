import React from 'react';
import Top from './Top/Top';
import bread from '../bread.png';
import GalleryModal from './GalleryModal';

class Haiyan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: [
        {src:"one.jpg", alt:"Drawings"},
        {src:"two.jpg", alt:"Drawings"},
      ],
      navitems: [
        {name: 'Technology',
         page: 'Haiyan Page',
        },
        {
          name: 'Exercise',
          page: 'Travel page',
        },    
        {name: 'Food',
         page: 'Shira Page',
        },
        {
          name: 'Travel',
          page: 'Travel page',
        },
        {
          name: 'Upcoming Features',
          page: 'Feature Page',  
        }
      ],
      iconSrc: {src: bread,
                alt: "Bread",
                pname: "Haiyan"}

    };
  }

  render() {
  	return (
      <div className="person-container">
        <Top topicon={this.state.iconSrc} navitems={this.state.navitems}/>
        <GalleryModal images={this.state.dishes}/>
      </div>);
  }

}

export default Haiyan;