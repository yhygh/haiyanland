import React from 'react';
import Modal from 'react-modal';

import './GalleryModal.css';

Modal.setAppElement('#root'); // suppresses modal-related test warnings.

const srcPrefix = '../assets/shira/';

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
    let imgPath = srcPrefix + image.src;

    this.setState({imageModalIsOpen: true, 
                   modalImageName: imgPath, 
                   modalImageTitle: image.alt, 
                   modalImageIdx: idx}
    );
  }

  closeModal = () => {
    this.setState({imageModalIsOpen: false}
    );
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
                  <img src={srcPrefix+image.src} 
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
            <img src={this.state.modalImageName} alt="Drawings"/>
            <div className="caption-container">
              <p id="caption">{this.state.modalImageTitle}</p>
            </div>
          </Modal>

        </div>
      </div>
    )
  }

}