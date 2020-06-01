import React from 'react';
import Modal from 'react-modal';

import './GalleryModal.css';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const srcPrefix = '../assets/';

export default class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageModalIsOpen: false,
      modalImageName: "",
      modalImageTitle: "Untitled",
      modalImageIdx: 0
    };
  }

  openModal = (image, idx) => {
    let imgPath = srcPrefix + this.props.pname + '/' + image.src;

    this.setState({imageModalIsOpen: true, 
                   modalImageName: imgPath, 
                   modalImageTitle: image.alt, 
                   modalImageIdx: idx}
    );
  }


  // TODO: use prevState, see Haiyan.js
  openPrev = () => {
    let idx = this.state.modalImageIdx - 1;
    if (idx === -1) {
      idx = this.props.images.length-1;
    }

    this.openModal(this.props.images[idx], idx);
  }

  openNext = () => {
    let idx = this.state.modalImageIdx + 1;
    if (idx === this.props.images.length ) {
      idx = 0;
    }    

    this.openModal(this.props.images[idx], idx);
  }

  closeModal = () => {
    this.setState({imageModalIsOpen: false}
    );
  }

  componentWillUnmount() {
    console.log(`Component will unmount in GalleryModal.js`);
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
                        onClick={()=>this.openModal(image, i)} 
                        alt={image.alt} />

                    <p id="gallery-caption">{image.alt}</p>
                
                </div>
              ) )
          }
          <Modal 
            isOpen={this.state.imageModalIsOpen} 
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div id="close-modal" className="close" onClick={this.closeModal}>&times;</div>          
            <div className="caption-container">
              <p id="caption">{this.state.modalImageTitle}</p>
            </div> 
            <div className="prev-next">
              <button id="prev" onClick={this.openPrev}>Prev</button>
              <button id="next" onClick={this.openNext}>Next</button> 
            </div> 
            <div className="modal-image-container">            
              <img src={this.state.modalImageName} alt="Drawings"/>
            </div>                                  
          </Modal>
        </div>
      </div>
    )
  }

}