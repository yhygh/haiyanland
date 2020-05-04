import React from 'react';
import GalleryModal from './GalleryModal';
import Top from './Top/Top';
import SideDrawer from './Top/SideDrawer';
import Backdrop from './Common/Backdrop';
import shiraicon from '../assets/shira/shira-icon.png';
import './Shira.css';

class Shira extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sideDrawerOpen: false,
      drawings: [
        {src:"running.jpg", alt:"Walking on the Street"},
        {src:"family.jpg", alt:"Mommy Daddy and Me"},
        {src:"garageman.jpg", alt:"Car in Garage"},        
        {src:"toothache.jpg", alt:"Toothache"},  
        {src:"ourhouse.jpg", alt:"Our House: Kitchen, Bedrooms and Garage"},        
        {src:"one.jpg", alt:"Untitled"},
        {src:"two.jpg", alt:"Untitled"},
        {src:"twoandhouse.jpg", alt:"Untitled"},  
        {src:"twoandletter.jpg", alt:"Untitled"},
        {src:"three.jpg", alt:"Untitled"},
        {src:"unfinished.jpg", alt:"Unfinished"},  
        {src:"oneandthree.jpg", alt:"Untitled"},
        {src:"four.jpg", alt:"Untitled"},
        {src:"many.jpg", alt:"Untitled"},
        {src:"flyingman.jpg", alt:"Untitled"},
        {src:"flyingXiannv.jpg", alt:"Untitled"}
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

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

   backdropClickHandler = () => {
    this.setState( {sideDrawerOpen: false} );
  } 

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer navitems={this.state.navitems} />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

  	return (
      <div className="person-container">        
        <Top topicon={this.state.iconSrc} navitems={this.state.navitems} drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}        
        <section id="main">
          <GalleryModal images={this.state.drawings} />
        </section>
  	  </div>);
  }
}

export default Shira;

        // <SideDrawer navitems={this.state.navitems} />
