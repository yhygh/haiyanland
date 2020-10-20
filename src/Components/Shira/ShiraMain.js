import React from 'react';
import {useRouteMatch, Link} from "react-router-dom";
import './ShiraMain.css';

export default function ShiraMain(props) {
  let match = useRouteMatch();

  return (
    <div>
      <div className="person-title">
         <p>{props.topicon.pname}'s World</p>
      </div>
      <div className="topic-top">This is a place where I record some of Shira's stories.
        I hope to make this website grow together with Shira.
      </div>
      <div className="shiramain-figure">
	      <img src="../assets/shira/first_figure.jpg" alt="Drawings"/>
	      <div className="shiramain-intro-container">
		      <p className="shiramain-figure-title">Age: 3 years 0 months </p> 
		      <div className="intro-content">
		        This is the very first figure that Shira drew. 
		        Navigate to <Link to={`${match.url}/gallery`}>Drawings</Link> to see her progress in eight months.
		      </div>
	      </div>
	    </div>
    </div>
  );
}