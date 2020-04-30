import React from 'react';
import Modal from 'react-modal';
import shiraicon from './assets/shira/shira-icon.png';
import './Shira.css';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const navitems = [
  	{name: 'Smile',
  	 page: 'Haiyan Page',
  	 img: './assets/shira/city.png'
    },
  	{name: 'Food',
  	 page: 'Shira Page',
  	 img: './assets/shira/running.jpg'
    },
    {
      name: 'Drawings',
      page: 'Travel page',
      img: './assets/haiyan/city.png'
    },
    {
      name: 'Coming up',
      page: 'Feature Page',
      img: './assets/haiyan/city.png'      
    }
  ];

/*
        <nav>    
          <ul id="topitem">
                {
                  navitems.map((interest, index) => (
                    <li className="person" key={index}>
                      <p>{interest.name}</p>
                    </li>
                  ))
                }
          </ul>
        </nav>
*/




// let slideIndex = 1;

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("shiraDrawings");
//   // var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex-1].style.display = "block";

// }

const drawings = [
  {src:"one.jpg", alt:"Drawings"},
  {src:"two.jpg", alt:"Drawings"},
  {src:"twoandhouse.jpg", alt:"Drawings"},  
  {src:"twoandletter.jpg", alt:"Drawings"},
  {src:"three.jpg", alt:"Drawings"},
  {src:"toothache.jpg", alt:"Toothache"},  
  {src:"unfinished.jpg", alt:"Unfinished"},  
  {src:"oneandthree.jpg", alt:"Drawings"},
  {src:"running.jpg", alt:"Walking on Street"},
  {src:"four.jpg", alt:"Drawings"},
  {src:"family.jpg", alt:"Mommy Daddy and Me"},
  {src:"many.jpg", alt:"Drawings"},
  {src:"flyingman.jpg", alt:"Drawings"},
  {src:"flyingXiannv.jpg", alt:"Drawings"},
  {src:"garageman.jpg", alt:"Car in Garage"},
  {src:"ourhouse.jpg", alt:"Our House: Kitchen, Bedrooms and Garage"}
];

const srcPrefix = './assets/shira/';

class Shira extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawingModalIsOpen: false,
      modalImageName: "./assets/shira/two.jpg",
      modalImageTitle: "No Title"
    };
  }

  openModal = (drawing) => {
    let imgPath = srcPrefix + drawing.src;

    this.setState({drawingModalIsOpen: true, 
                   modalImageName: imgPath, 
                   modalImageTitle: drawing.alt}
    );
  }

  closeModal = () => {
    this.setState({drawingModalIsOpen: false}
    );
  }

  render() {
  	return (
      <div className="person-container">
        <div className="person-icon-title-container">
          <div id="person-icon-container">
            <img src={shiraicon} className="person-img" alt="Shira"/>
          </div>
          <div className="person-title">
             <p>Shira's World</p>
          </div>
        </div>

        <section id="main">
          <div id="drawing-container">
            {
              drawings.map( (drawing, i)=> (
                  <div key={i}>
                     <img src={srcPrefix+drawing.src} 
                          className='drawing' 
                          onClick={()=>this.openModal(drawing)} 
                          alt={drawing.alt} />
                  </div>
                ) )
            }

            <Modal 
              isOpen={this.state.drawingModalIsOpen} 
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}
              className="modal-content"
              overlayClassName="modal-overlay"
            >
              <div id="close-modal" className="close" onClick={this.closeModal}>&times;</div>
              <img src={this.state.modalImageName} alt="Drawings"/>
              <div className="caption-container">
                <p id="caption">{this.state.modalImageTitle}</p>
              </div>
            </Modal>

          </div>
        </section>
  	  </div>);
  }
}

export default Shira;


              //               <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              //               <a class="next" onclick="plusSlides(1)">&#10095;</a>
