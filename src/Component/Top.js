import React from 'react';
import './Top.css';
// import {Link} from 'react-router-dom';

class Top extends React.Component {
  render() {
  	  console.log(this.props.location);
  	  console.log(this.props.match);
      console.log(this.props.topicon);
  	return (
        <section className="person-icon-title-container">
          <div id="person-icon-container">
            <img src={this.props.topicon.src} className="person-img" alt={this.props.topicon.alt}/>
          </div>
          <div className="person-title">
             <p>{this.props.topicon.pname}'s World</p>
          </div>
          <nav>
                <ul id="topitem">
                  {
                    this.props.navitems.map((interest, index) => (
                      <li className="person" key={index}>
                        <p>{interest.name}</p>
                      </li>
                    ))
                  }
                </ul>
          </nav>
        </section>);
  }
}

export default Top;

/*
      <nav>
	  		<div id="navbar">
	  		  <ul id="topitem">
	              {
	              	items.map((person, index) => (
	              		<li className="person" key={index}>
	              		  <Link to={person.page}>{person.name}'s World</Link>
	              		  <button
	              		    onClick={ () => {
                              // api call
                              // change to a different page
                              this.props.history.push('/haiyan');
	              		    } }> 
	              		    Click me to go to {person.name}
	              		  </button>

	              		</li>
	              	))
	              }
	  		  </ul>
	  		</div>
  	  </nav>);	  		
*/