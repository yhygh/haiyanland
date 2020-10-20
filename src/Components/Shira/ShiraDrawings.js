import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import withGallery from '../Common/withGallery';

import '../GalleryModal.css';

import DrawingData from '../../assets/shira/json/drawingData.json';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const srcPrefix = '../../assets/';

const drawingsIntro = 'Shira drew the following works when ' 
                   + 'she was three years and eight months old.' 
                   + ' I chose her comment to each drawing as the title.';

class ShiraDrawings extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(`inside ShiraLanguage.js componentDidUpdate ... `);
  }

  render() {
    let images = DrawingData;

    return (
      <Fragment>
        <div className="topic-top">
          {drawingsIntro}
        </div>
        <div className="image-container">
          {
            images.map( (image, i)=> (
                <div key={i}>
                  <img src={srcPrefix+this.props.pname + '/' + image.src} 
                        onClick={()=>this.props.openModal(image, i)} 
                        alt={image.alt} />

                    <p id="gallery-caption">{image.alt}</p>
                
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

export default withGallery(ShiraDrawings, srcPrefix, DrawingData);