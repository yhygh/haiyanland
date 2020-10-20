import React from 'react';
import './Weather.css';

import axios from 'axios';

const weatherIcons = {
	"Sunny": "../../assets/weather/sunny.jpg"
}


export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    console.log(`constructor in Weather.js`);
  }

  state = {
  	loading: true,
  	properties: null,
  	periods: null,
    fetchWeatherErrorFound: false
  };

  fetchCityWeather = (id) => { 
    let url = 'https://api.weather.gov/gridpoints/' + this.props.cities[id].grid + '/forecast';

    console.log(`url is ${url}`);
    axios
      .get(url)
      .then(res => {
        const data = res.data.properties;
        this.setState({loading: false,
                       fetchWeatherErrorFound: false,
                       properties: data,
                       periods: data.periods});
      })
      .catch(err => {
        this.setState({fetchWeatherErrorFound: err,
                       loading: false});
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update ... ');
    if (prevProps.currentCityId !== this.props.currentCityId) {
      this.setState({loading: true});
      this.fetchCityWeather(this.props.currentCityId);
    }
  }

  componentDidMount() {
    console.log('Component did mount in Weather.js ... ');
    // select San Francisco
    this.fetchCityWeather(this.props.currentCityId);
  }

  componentWillUnmount() {
    console.log(`Component will unmount in Weather.js`);
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
    if (this.state.loading) {  
      return <div>Loading weather data from National Weather Service ... </div>
    }

    if (this.state.fetchWeatherErrorFound) {
      return <div>Having trouble retrieving forecast data from the National Weather Service API</div>
    }

  	return (
  		<div>  
          <h3>{this.props.cities[this.props.currentCityId].city}</h3>

          <h4>Current Conditions:</h4>
          <p>Temperature: {this.state.periods[0].temperature}F</p>
          <p>Wind Speed: {this.state.periods[0].windSpeed}</p>              
          <p>{this.state.periods[0].detailedForecast}</p>
          <p>Last Updated: {new Date(this.state.properties.updateTime).toString()}</p>              
          <div id="weather-forecast">
            {this.renderEachDay()}
          </div>
	    </div> 
    );
  }
}



