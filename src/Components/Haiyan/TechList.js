import React from 'react';

import './TechList.css';

import TechData from './techData.json';

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
      <div id="tech-main-grid">
      	<h2 className="main-grid-item main-tech-title">Technology</h2>
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
	  );
	}

}

export default TechList;


