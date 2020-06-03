import React from 'react';

function withGallery(WrappedComponent, srcPrefix) {
	class newComponent extends React.Component {

    state = {
      imageModalIsOpen: false,
      modalImageName: "",
      modalImageTitle: "Untitled",
      modalImageIdx: 0
    };

	  openModal = (image, idx) => {
	    let imgPath = srcPrefix + this.props.pname + '/' + image.src;

	    console.log(`in withGallery openModal imgPath: ${imgPath}`);

	    this.setState({imageModalIsOpen: true, 
	                   modalImageName: imgPath, 
	                   modalImageTitle: image.alt, 
	                   modalImageIdx: idx}
	    );

	    console.log(`in withGallery openModal imageModalIsOpen: ${this.state.imageModalIsOpen}`);
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

		render() {
			return (
				<WrappedComponent 
				  {...this.props}
				  imageModalIsOpen={this.state.imageModalIsOpen}
				  modalImageName={this.state.modalImageName}
				  modalImageTitle={this.state.modalImageTitle}
          openModal={this.openModal}
          openPrev={this.openPrev}
          openNext={this.openNext}
          closeModal={this.closeModal}
       />
	    )
		}

	}

	return newComponent;
}

export default withGallery;