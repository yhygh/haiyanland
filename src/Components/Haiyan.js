import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

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
         link: '/technology',
        },   
        {name: 'Lazy Dishes',
         link: '/dishes',
        },
        {
          name: 'Geography',
          link: '/geography',
        },
        {
          name: 'Coming Up',
          link: '/comingup',  
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
      <Router>
        <div id={this.state.iconSrc.pname} className="person-container">
          <Top topicon={this.state.iconSrc} navitems={this.state.navitems}
            drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}  navitems={this.state.navitems}/>
          {backdrop}
          <Switch>
            <Route path={"/" + this.state.iconSrc.pname + "/dishes"}> 
              <GalleryModal images={this.state.dishes} intro="Intro Placeholder"/>
            </Route>
          </Switch>
        </div>
      </Router>);
  }

}

export default Haiyan;


            // <Route path={"/" + this.state.iconSrc.pname} exact>
            //   <HaiyanMain topicon={this.state.iconSrc}/>
            // </Route>  
            // <Route path={"/" + this.state.iconSrc.pname + "/geography"} component={HaiyanGeography} />