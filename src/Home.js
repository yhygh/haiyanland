import React from 'react';
import bread from './bread.png';
import './Home.css';
import {Link} from 'react-router-dom';

import HaiyanOwnModal from './Components/Common/HaiyanOwnModal';

const items = [
    {name: 'Shira',
     page: '/shira',
    },
    {name: 'Haiyan',
     page: '/haiyan',
    }    
  ];

class Home extends React.Component {
  state = {
    showModal: false
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    let haiyanIntroModal;
    if (this.state.showModal) {
      haiyanIntroModal = (<HaiyanOwnModal showModal={this.state.showModal} onClose={this.closeModal}/>);
    }

  	return (

      <div className="Home-container">
        <div className="Home-title">Welcome to Our Land!</div>
        <div>
          <img src={bread} className="Home-bread-img Home-bread-logo" alt="Bread"/>
        </div>
        <ul id="home-personitem">
          {
            items.map((person, index) => (
              <li key={index}>
                <Link to={person.page}>{person.name}</Link>
              </li>
            ))
          }
        </ul>
        <div><button onClick={this.openModal}>Birth of this Website</button></div>
        {haiyanIntroModal}
      </div>

    );
     
  }

}

export default Home;