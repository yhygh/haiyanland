import React from 'react';

import Top from './Top/Top';
import SideDrawer from './Top/SideDrawer';
import Backdrop from './Common/Backdrop';
import shiraicon from '../assets/shira/shira-icon.png';

import {
  Switch,
  Route 
} from 'react-router-dom';
import ShiraLanguage from './Shira/ShiraLanguage';
import ShiraLaugh from './Shira/ShiraLaugh';
import ShiraMain from './Shira/ShiraMain';
import ShiraMisc from './Shira/ShiraMisc';
import GalleryModal from './GalleryModal';
import Footer from './Footer';

import DrawingData from '../assets/shira/json/drawingData.json';

class Shira extends React.Component {

  state = {
    sideDrawerOpen: false,
    drawings: DrawingData,
    navitems: [
      {
        name: 'About',
        link: '',
      },       
      {
        name: 'Drawings',
        link: '/gallery',
      },      
      {name: 'Laugh',
       link: '/shiralaugh',
      },
      {name: 'Language',
       link: '/shiralang',
      },
      {
        name: 'Misc',
        link: '/shiramisc',  
      }
     ],
    iconSrc: {src: shiraicon,
              alt: "Shira",
              pname: "Shira"},
    drawingsIntro: 'Shira drew the following works when ' 
                   + 'she was three years and eight months old.' 
                   + ' I chose her comment to each drawing as the title.',
  };

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

   backdropClickHandler = () => {
    this.setState( {sideDrawerOpen: false} );
  }

  componentWillUnmount() {
    console.log(`Component will unmount in Shira.js`);
  }

  render() {
    let backdrop;

    let match = this.props.match;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

      // console.log(`Shira page: ... `);
      // console.log(this.props.location);
      // console.log(this.props.match);  

  	return (

        <div id={this.state.iconSrc.pname} className="person-container">        
          <Top topicon={this.state.iconSrc} navitems={this.state.navitems} 
               match = {this.props.match}
            drawerToggleClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} topicon={this.state.iconSrc} 
            navitems={this.state.navitems} click={this.backdropClickHandler}/>
          {backdrop}
          <Switch>
            <Route path={"/" + this.state.iconSrc.pname} exact> 
              <ShiraMain topicon={this.state.iconSrc}/>
            </Route>
            <Route path={`${match.path}/shiralang`} component={ShiraLanguage} />
            <Route path={`${match.path}/shiralaugh`} component={ShiraLaugh} />            
            <Route path={`${match.path}/gallery`}>
              <GalleryModal images={this.state.drawings} intro={this.state.drawingsIntro} pname="shira"/>
            </Route>
            <Route path={`${match.path}/shiramisc`} component={ShiraMisc} />   
          </Switch>
          <Footer />
    	  </div>);
  }
}

export default Shira;


