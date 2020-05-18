import React from 'react';
import TechList from './TechList';
import './HaiyanMain.css';

export default function HaiyanMain(props) {

  return (
    <div>
      <div className="person-title">
         <p>{props.topicon.pname}'s World</p>
      </div>
      <div className="topic-top">
        This is the home for the technology I have studied, used and worked.
      </div>
      <TechList />
    </div>
  );
}