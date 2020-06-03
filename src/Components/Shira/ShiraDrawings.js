import React from 'react';
import Modal from 'react-modal';

import withGallery from '../Common/withGallery';

import '../GalleryModal.css';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const srcPrefix = '../../assets/';

class ShiraDrawings extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(`inside ShiraLanguage.js componentDidUpdate ... `);
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="topic-top">
          {this.props.intro}
        </div>
        <div className="image-container">
          {
            this.props.images.map( (image, i)=> (
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
      </div>
    )
  }
}

export default withGallery(ShiraDrawings, srcPrefix);