import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import withGallery from '../Common/withGallery';

// import '../GalleryModal.css';
import './HaiyanDishes.css';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const srcPrefix = '../../assets/';

const dishesIntro = 'A lazy dish in my dictionary means a dish that takes very little ' 
                   + 'time (less than ten minutes) to prepare but still delicious, ' 
                   + 'which has always been my goal. '
                   + 'More dishes and recipes are coming.';

const dishes = [
        {src:"baked-sweet-peppers.jpg", alt:"Baked Sweet Peppers"},
        {src:"baked-sweet-peppers.jpg", alt:"Baked Bitter Peppers"},        
      ];        

const recipes = {
    'Baked Sweet Peppers': ['Cut sweet peppers and other optional vegetables', 
                            'Mix olive oil, salt', 
                            'Bake at 350F for one hour'
                           ],
    'Baked Bitter Peppers': ['Cut bitter peppers and other optional vegetables', 
                            'Mix olive oil, salt', 
                            'Bake at 350F for one hour'
                           ]
};

class HaiyanDishes extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(`inside HaiyanDishes.js componentDidUpdate ... `);
  }

  render() {
    return (
      <Fragment>
        <div className="topic-top">
          {dishesIntro}
        </div>
        <div className="image-container">
          {
            dishes.map( (image, i)=> (
                <div key={i} className="dish">
                  <p id="gallery-caption">{image.alt}</p>
                  <div className="dish-content">
                    <div>
                      <img src={srcPrefix+this.props.pname + '/' + image.src} 
                            onClick={()=>this.props.openModal(image, i)} 
                            alt={image.alt} />
                    </div>
                    <div className="recipe">
                        <ol className="recipe-step">
                          {recipes[image.alt].map( (step, i) => (
                             <li key={i}>{step}</li>
                          ) )}
                        </ol>
                    </div>
                  </div>
                </div>
              ) )
          }
          <Modal 
            isOpen={this.props.imageModalIsOpen} 
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.props.closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div id="close-modal" className="close" onClick={this.props.closeModal}>&times;</div>          
            <div className="caption-container">
              <p id="caption">{this.props.modalImageTitle}</p>
            </div>
            <div className="prev-next">
              <button id="prev" onClick={this.props.openPrev}>Prev</button>
              <button id="next" onClick={this.props.openNext}>Next</button> 
            </div> 
            <div className="modal-image-container">            
              <img src={this.props.modalImageName} alt="Drawings"/>
            </div>                                  
          </Modal>
        </div>
      </Fragment>
    )
  }
}

export default withGallery(HaiyanDishes, srcPrefix, dishes);