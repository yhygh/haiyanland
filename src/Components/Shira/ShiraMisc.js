import React from 'react';
import {useRouteMatch, Link} from "react-router-dom";
// import './ShiraMisc.css';
import './ShiraMain.css';

export default function ShiraMisc(props) {
  let match = useRouteMatch();

  return (
    <div>
       <h2>Six Feet!</h2> 
      <div className="topic-top">
        If something is influential enough that Shira would draw it, does it mean that it will be one of her 
        earliest memories? 
      </div>
      <div className="shiramain-figure">
	      <img src="../assets/shira/six_feet.jpg" alt="Drawings"/>
	      <div className="shiramain-intro-container">
		      <p className="shiramain-figure-title">Age: 3 years 9 months</p> 
		      <div className="intro-content">
		        A few days after we had a walk on the street, Shira drew this and told me: "Six Feet!".  
		      </div>
	      </div>
	  </div>
    </div>
  );
}