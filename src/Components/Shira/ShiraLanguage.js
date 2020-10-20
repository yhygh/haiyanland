import React from 'react';
import './ShiraLanguage.css';

const shiraLanguage = props => {  
  return (
    <div>
      <div className="lang-grid-container">
        <div className="lang-photo-item">
          <p><b>Garage Number</b></p>
          <img src="../assets/shira/garage_number.jpg" alt="Garage Number" />
        </div>
        <div className="lang-story-item">
            <p>"Look, Shira, that house number is on the garage door!", I said. </p>
            <p>"That's not a house number. It's a garage number!", Shira emphasized.</p>
        </div>
      </div>
    </div>
  );
}

export default shiraLanguage;