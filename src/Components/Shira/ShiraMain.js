import React from 'react';
import './ShiraMain.css';

const shiraMain = props => {  
  return (
    <div>
          <div className="person-title">
             <p>{props.topicon.pname}'s World</p>
          </div>
      <div className="topic-top">This is a place where I record some of Shira's stories.
      I hope to make this website grow as Shira grows.</div>
    </div>
  );
}

export default shiraMain;
