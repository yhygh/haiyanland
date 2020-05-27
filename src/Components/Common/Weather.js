import React, { useState, useEffect } from 'react';
import './Weather.css';

import axios from 'axios';

const weatherIcons = {
	"Sunny": "../../assets/weather/sunny.jpg"
}

export default class Weather extends React.Component {

  state = {
  	loading: true,
  	properties: null,
  	periods: null,
  };

  componentDidMount() {
  	axios
  		.get('https://api.weather.gov/gridpoints/MTR/86,125/forecast')
  		.then(res => {
  			const data = res.data.properties;
        this.setState({properties: data,
                       periods: data.periods});

    		this.setState({loading: false});

  		})
  		.catch(err => {
				console.log(err);
 			});
  }

  renderEachDay(){
  	return (
  		this.state.periods.map((period, idx) => (
  			<div key={idx} className="day-grid">
          <div className="period-name">{period.name}</div>
          <div>{period.temperature}F</div>
          <div> <img src={weatherIcons[period.shortForecast]} alt="icon to be made" /> </div>
          <div>{period.shortForecast}</div>
  			</div>
  		))
  	)
  }

  render() { 
  	return (
  		<div>
	      { this.state.loading ? ( 
	      	<div>Loading weather data from National Weather Service ... </div>
	      	) : ( 
	      		<div>
				      <p>Current Conditions:</p>
				      <p>Temperature: {this.state.periods[0].temperature}F</p>
				      <p>Wind Speed: {this.state.periods[0].windSpeed}</p>				      
				      <p>{this.state.periods[0].detailedForecast}</p>
				      <p>Last Updated: {this.state.properties.updateTime}</p>				      
	            <div id="weather-forecast">
	              {this.renderEachDay()}
	            </div> 
		      	</div>  
	      ) }
	    </div> 
    );
  }ß


}
