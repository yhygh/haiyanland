import React from 'react';

import './TechList.css';

import TechData from '../../assets/haiyan/json/techData.json';

class TechList extends React.Component {

	renderWebsiteList(webList) {
		return (
			webList.map((link, idx) => (
					<div key={idx}>
					  <div> <a href={link.url}>{link.title}</a> </div> 
					  <p>{link.comment}</p>
					</div>
				))
		);
	}

  render() {
	  return (
	  	<div>
	  		<h2 className="main-tech-title">Technology</h2>
	      <div id="tech-main-grid">
	      	{
	      		TechData.map((category, idx) => (
		      			<div key={idx} className="main-grid-item category-grid">
	                <div className="category-grid-item category-grid-item-title">{category.title}</div>
	                <div className="category-grid-item"> 
	                  {this.renderWebsiteList(category.links)}
	                </div>            
		      			</div>
	      		))
	      	}
	      </div>
	    </div>
	  );
	}

}

export default TechList;


