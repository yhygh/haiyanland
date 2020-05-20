import React from 'react';
import './HaiyanOwnModal.css';

const introParagraphs = [
        "   I am a software engineer who has developed and tested both front-end and backend "
            + "features of multiple products, "
            + " and worked in many areas including network, database, system, web development, and GIS." 
            + " I have been exploring how to best leverage my talents going forward.",
        "When the shelter-in-place started, "
            + "I decided to build a personal website that I had long wanted to do but for which I never had time. " 
            + "I just can't stop working on it once I started. It brought me so much joy. "
            + "I know that from now on, web development is my passion. It will be my personal hobby and my career direction. "
            + " I will keep working on this website and adding more and more features. ",
        "If you like what I built, and would like me to join your team, "
            + " please feel free to"        
      ];

const skills = ["React", "Responsive Design", "JavaScript", "HTML", "CSS", "JSX", "JSON"];

class HaiyanOwnModal extends React.Component {

	renderContent(){
		return ( 
			<div className="haiyan-modal-content"> 
	      { introParagraphs.map( (parag, idx) => (
	      	<p key={idx}>{parag}  </p>
	        ) )
        }
         
        <span><a href="mailto:haiyan.yang01@gmail.com">contact me</a>.</span>
        <p>The skills that I used to build this website are as follows: </p>

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
