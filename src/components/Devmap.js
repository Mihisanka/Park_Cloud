import React from 'react';


import Map from 'devextreme-react/map';
import SelectBox from 'devextreme-react/select-box';

// import {
//   markersData, routesData, modeLabel, colorLabel,
// } from './data.js';

const modes = ['driving', 'walking'];
const routeColors = ['blue', 'green', 'red'];

const apiKey = {
  bing: 'Aq3LKP2BOmzWY47TZoT1YdieypN_rB6RY9FqBfx-MDCKjvvWBbT68R51xwbL-AqC',
};

//data of the map points 6.917573289442866, 79.85601901629268 ,,,,6.927415705444212, 79.84466420796389

const markersData = [{
    location: [6.917573289442866,79.85601901629268],
    tooltip: {
      text: 'Colombo city center',
    },
  }, {
    location: '6.927415705444212, 79.84466420796389',
    tooltip: {
      text: 'Central Park',
    },
  }, {
    location: { lat: 40.753889, lng: -73.981389 },
    tooltip: {
      text: 'Fifth Avenue',
    },
  }, {
    location: 'Brooklyn Bridge,New York,NY',
    tooltip: {
      text: 'Brooklyn Bridge',
    },
  }];
  
   const routesData = [{
    weight: 6,
    color: 'blue',
    opacity: 0.5,
    mode: '',
    locations: [
      [40.782500, -73.966111],
      [40.755833, -73.986389],
      [40.753889, -73.981389],
      'Brooklyn Bridge,New York,NY',
    ],
  }];
  
   const modeLabel = { 'aria-label': 'Mode' };
   const colorLabel = { 'aria-label': 'Color' };
  
//map 

export default function Devmap() {
  const [routes, setRoutes] = React.useState(routesData);

  const routeModeChange = React.useCallback((value) => {
    setRoutes(routes.map((item) => {
      item.mode = value;
      return item;
    }));
  }, [routes, setRoutes]);

  const routeColorChange = React.useCallback((value) => {
    setRoutes(routes.map((item) => {
      item.color = value;
      return item;
    }));
  }, [routes, setRoutes]);

  return (
    <div style={{width:'60%', height:'400px', justifyContent:'center',alignItems:'center',marginLeft:'20%'}}>
      <Map
        defaultZoom={8}
        height="100%"
        width="100%"
        controls={true}
        markers={markersData}
        routes={routes}
        provider="bing"
        apiKey={apiKey}
      />
      {/* <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Set mode</span>
          <SelectBox
            defaultValue="driving"
            items={modes}
            inputAttr={modeLabel}
            onValueChange={routeModeChange}
          />
        </div>
        <div className="option">
          <span>Route color</span>
          <SelectBox
            defaultValue="blue"
            inputAttr={colorLabel}
            items={routeColors}
            onValueChange={routeColorChange}
          />
        </div>
      </div> */}
    </div>
  );
}
