import React from 'react';

import Top from './Top/Top';
import SideDrawer from './Top/SideDrawer';
import Backdrop from './Common/Backdrop';
import shiraicon from '../assets/shira/shira-icon.png';

import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import ShiraLanguage from './Shira/ShiraLanguage';
import ShiraMain from './Shira/ShiraMain';
import GalleryModal from './GalleryModal';

class Shira extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sideDrawerOpen: false,
      drawings: [
        {src:"running.jpg", alt:"Walking on the Street"},
        {src:"family.jpg", alt:"Mommy Daddy and Me"},
        {src:"one.jpg", alt:"Untitled"},
        {src:"toothache.jpg", alt:"Toothache"},
        {src:"lost.jpg", alt:"Lost in the Forest"},
        {src:"angry.jpg", alt:"Angry"},
        {src:"upset.jpg", alt:"Upset: Mommy is Busy"},
        {src:"garageman.jpg", alt:"Car in Garage"},
        {src:"ourhouse.jpg", alt:"Our House: Kitchen, Bedrooms and Garage"},
        {src:"flyingman.jpg", alt:"Untitled"},                 
        {src:"twoandhouse.jpg", alt:"Untitled"},
        {src:"flyingXiannv.jpg", alt:"Untitled"},          
        {src:"twoandletter.jpg", alt:"Letters Written by Shira"},
        {src:"three.jpg", alt:"Untitled"},
        {src:"oneandthree.jpg", alt:"Untitled"},
        {src:"two.jpg", alt:"Untitled"},        
        {src:"four.jpg", alt:"Untitled"},
        {src:"many.jpg", alt:"Untitled"},
        {src:"unfinished.jpg", alt:"Unfinished"}        
      ],
      navitems: [
        {name: 'Smile',
         page: 'Haiyan Page',
         link: '/shiralang',
        },
        {name: 'Language',
         page: 'Shira Page',
         link: '/shiralang',
        },
        {
          name: 'Drawings',
          page: 'Travel page',
          link: '/gallery',
        },
        {
          name: 'Coming up',
          page: 'Feature Page',
          link: '/shiralang',  
        }
       ],
      iconSrc: {src: shiraicon,
                alt: "Shira",
                pname: "Shira"},
      drawingsIntro: 'Shira drew the following works when ' 
                     + 'she was three years and eight months old.' 
                     + ' I chose her comment to each drawing as the title.',
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
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

  	return (
      <Router>
        <div id={this.state.iconSrc.pname} className="person-container">        
          <Top topicon={this.state.iconSrc} navitems={this.state.navitems} 
            drawerToggleClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} navitems={this.state.navitems} />
          {backdrop}
          <Switch>
            <Route path={"/" + this.state.iconSrc.pname} exact>
              <ShiraMain topicon={this.state.iconSrc}/>
            </Route>  
            <Route path={"/" + this.state.iconSrc.pname + "/shiralang"} component={ShiraLanguage} />
            <Route path={"/" + this.state.iconSrc.pname + "/gallery"}> 
              <GalleryModal images={this.state.drawings} intro={this.state.drawingsIntro}/>
            </Route>
          </Switch>
    	  </div>
      </Router>);
  }
}

export default Shira;
