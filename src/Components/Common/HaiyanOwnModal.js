import React from 'react';
import './HaiyanOwnModal.css';

const introParagraphs = [
        "   As a software engineer who has been both a developer and a testing engineer, "
            + " worked in many areas including network, database, system, web development, and GIS; " 
            + "backend and front end; I have always been wondering which area I should "
            + "excel the most and specialize in. ",  
        "When the shelter-in-place started, "
            + "I decided to build a personal website that I had long wanted to do but never had time. " 
            + "That did it. I just can't stop working on it once I started. It brought me so much joy. "
            + "I know that from now on, web development is my passion. It'll be my personal hobby and my career direction. "
            + " I will keep working on this website and adding more and more features. ",
        "If you like what I built, and would like me to join your team. "
            + " Please contact me at haiyan.yang01@gmail.com.",
        "The skills that I used to build this website are as follows: "
      ];

const skills = ["React", "Responsive Design", "JavaScript", "HTML", "CSS", "JSX", "JSON"];

class HaiyanOwnModal extends React.Component {

	renderContent(){
		return ( 
			<div className="haiyan-modal-content"> 
	      { introParagraphs.map( (parag, idx) => (
	      	<p key={idx}>{parag}</p>
	        ) )
        }

	  	  <ul>
	        {skills.map((skill, i) => ( <li key={i}>{skill}</li> )) }
	  	  </ul>
  	  </div>
		);
	}

  render() {
  	return (
  		<div className="haiyan-modal-overlay">
  		  <span className="close-times" onClick={this.props.onClose} > &times; </span>
        {this.renderContent()}
  		</div>
  	);	
  }
}

export default HaiyanOwnModal;
 //       <div className="haiyan-modal-content">{this.renderSkills()}</div>
