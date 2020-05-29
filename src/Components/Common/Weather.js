import React from 'react';
import './Weather.css';

import axios from 'axios';

import Dropdown from './Dropdown';

const weatherIcons = {
	"Sunny": "../../assets/weather/sunny.jpg"
}

const cities = [
  {
    id: 0,
    city: 'San Francisco',
    grid: 'MTR/86,125'
  },
  {
    id: 1,
    city: 'Boston',
    grid: 'BOX/65,78'
  },
  {
    id: 2,
    city: 'New York',
    grid: 'OKX/33,36'
  }
];



export default class Weather extends React.Component {

  state = {
  	loading: true,
  	properties: null,
  	periods: null,
    currentCityId: 0
  };

  chooseCity = (id) => {
    this.setState({currentCityId: id});    
    let url = 'https://api.weather.gov/gridpoints/' + cities[id].grid + '/forecast';
    console.log(`url is ${url}`);
    axios
      .get(url)
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

  componentDidMount() {
    // select San Francisco
    this.chooseCity(0);
  }

  renderEachDay(){
  	return (
  		this.state.periods.map((period, idx) => (
  			<div key={idx} className={period.isDaytime ? "day-grid" : "day-grid night"}>
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
              <h3>{cities[this.state.currentCityId].city}</h3>
              <Dropdown title="Select city" items={cities} parentFunc={this.chooseCity}/>

				      <h4>Current Conditions:</h4>
				      <p>Temperature: {this.state.periods[0].temperature}F</p>
				      <p>Wind Speed: {this.state.periods[0].windSpeed}</p>				      
				      <p>{this.state.periods[0].detailedForecast}</p>
				      <p>Last Updated: {new Date(this.state.properties.updateTime).toString()}</p>				      
	            <div id="weather-forecast">
	              {this.renderEachDay()}
	            </div> 
		      	</div>
	      ) }
	    </div> 
    );
  }


}
