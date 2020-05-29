import React from 'react';
// import { Map, TileLayer} from 'react-leaflet/src';

// import './Geography.css';

import Weather from '../Common/Weather';

export default class Geography extends React.Component<{}, State> {

  render() {
    // const position = [this.state.lat, this.state.lng]
    // return (
    //   <iframe width="100%" height="800px" src="https://noaa.maps.arcgis.com/apps/MapSeries/index.html?appid=cf93575e5535467199da7358ee6c825c" frameborder="0" scrolling="no"></iframe>
    // )
    return (
         <div> 
            <h3> Weather Forecast for a Neighborhood</h3>
            <p>in</p>

            <Weather />

         </div>
      )
  }
}