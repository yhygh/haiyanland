import React from 'react';
import Top from './Top/Top';
import bread from '../bread.png';
import GalleryModal from './GalleryModal';
import SideDrawer from './Top/SideDrawer';
import BackDrop from './Common/Backdrop'

class Haiyan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sideDrawerOpen: false,
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
        {name: 'Lazy Dishes',
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

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
    } );
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = (<BackDrop click={this.backdropClickHandler}/>);
    }

  	return (
      <div id={this.state.iconSrc.pname} className="person-container">

        <Top topicon={this.state.iconSrc} navitems={this.state.navitems}
          drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}  navitems={this.state.navitems}/>
        {backdrop}
        <GalleryModal images={this.state.dishes}/>
      </div>);
  }

}

export default Haiyan;