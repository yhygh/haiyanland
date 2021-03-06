import React from 'react';
import {
  Switch, 
  Route 
} from 'react-router-dom';

import Top from './Top/Top';
import bread from '../bread.png';
import SideDrawer from './Top/SideDrawer';
import BackDrop from './Common/Backdrop';
import HaiyanComingup from './Haiyan/HaiyanComingup';
import HaiyanMain from './Haiyan/HaiyanMain';
import Geography from './Haiyan/Geography';
import HaiyanDishes from './Haiyan/HaiyanDishes';

import Footer from './Footer';

class Haiyan extends React.Component {
  state = {
      sideDrawerOpen: false,
      navitems: [
        {name: 'About',
         link: '',
        },   
        {
          name: 'Geography',
          link: '/geography',
        },
        {name: 'Lazy Dishes',
         link: '/dishes',
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

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
    } );
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  componentWillUnmount() {
    console.log(`Component will unmount in Haiyan.js`);
  }

  render() {
    let backdrop;
    let match = this.props.match;    

    if (this.state.sideDrawerOpen) {
      backdrop = (<BackDrop click={this.backdropClickHandler}/>);
    }

  	return (
        <div id={this.state.iconSrc.pname} className="person-container">
          <Top topicon={this.state.iconSrc} navitems={this.state.navitems}
              match = {this.props.match}
             drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} 
            topicon={this.state.iconSrc} 
            navitems={this.state.navitems} 
            click={this.backdropClickHandler}/>
          {backdrop}
          <Switch>
            <Route path={"/" + this.state.iconSrc.pname} exact> 
              <HaiyanMain topicon={this.state.iconSrc}/>
            </Route>        
            <Route path={`${match.url}/comingup`} component={HaiyanComingup} />
            <Route path={`${match.url}/geography`} component={Geography} />            
            <Route path={`${match.url}/dishes`}> 
              <HaiyanDishes pname="haiyan"/>
            </Route>

          </Switch>
          <Footer />
        </div>);
  }

}

export default Haiyan;