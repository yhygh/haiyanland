import React from 'react';
// import { Map, TileLayer} from 'react-leaflet/src';

// import './Geography.css';

import Weather from '../Common/Weather';
import ErrorBoundary from '../Common/ErrorBoundary';
import Dropdown from '../Common/Dropdown';


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

export default class Geography extends React.Component {
  state = {
    currentCityId: 0
  }

  chooseCity = (id) => {
    if (id !== this.state.currentCityId) {
      this.setState({currentCityId: id});
    }
  }


  render() {
    // const position = [this.state.lat, this.state.lng]
    // return (
    //   <iframe width="100%" height="800px" src="https://noaa.maps.arcgis.com/apps/MapSeries/index.html?appid=cf93575e5535467199da7358ee6c825c" frameborder="0" scrolling="no"></iframe>
    // )
    return (
      <div> 
        <h3> Weather Forecast for a Neighborhood</h3>
        <p>in</p>
        <Dropdown title="Select city" items={cities} parentFunc={this.chooseCity}/>   
        <ErrorBoundary>          
              <Weather cities={cities} currentCityId={this.state.currentCityId}/>
        </ErrorBoundary>       
      </div>
    )
  }
}