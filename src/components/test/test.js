import React from "react";
import Map from "devextreme-react/map";
import SelectBox from "devextreme-react/select-box";


function TestMap() {
const modes = ["driving"];
const routeColors = ["blue", "green", "red"];
const markerUrl =
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/maps/map-marker.png";
class TestMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerUrl,
    };
    this.useCustomMarkers = this.useCustomMarkers.bind(this);
  }
  useCustomMarkers(e) {
    this.setState({
      markerUrl: e.value ? markerUrl : null,
    });
  }

  render() {
    let latitudeA = this.props.latitudeA;
    let longitudeA = this.props.longitudeA;
    let latitudeB = this.props.latitudeB;
    let longitudeB = this.props.longitudeB;

    return (
      <div>
        <Map
          defaultZoom={14}
          height={440}
          width="100%"
          controls={true}
          markerIconSrc={this.state.markerUrl}
          // markers={[
          //   { location: [latitudeA, longitudeA] },
          //   { location: [latitudeB, longitudeB] },
          // ]}
          markers={[
            {
              location: [latitudeA, longitudeA],
              tooltip: "E",
            },
            {
              location: [latitudeB, longitudeB],
              tooltip: "S",
            },
          ]}
          routes={[
            {
              weight: 6,
              color: "blue",
              opacity: 0.5,
              mode: "",

              locations: [
                [latitudeA, longitudeA],
                [latitudeB, longitudeB],
              ],
            },
          ]}
          provider="bing"
        />
      </div>
    );
  }
}
}
export default TestMap;

// import React, { useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   LoadScript,
//   DirectionsService,
//   DirectionsRenderer,
// } from "@react-google-maps/api";

// const Directions = ({ start, end, directionsCallback }) => {
//   const [directions, setDirections] = useState(null);

//   // const [markers, setMarkers] = useState([
//   //   { id: 1, position: { start } }, // marker 1
//   //   { id: 2, position: { end } }, // marker 2
//   // ]);

//   const onDirectionsCallback = (response) => {
//     if (response !== null) {
//       setDirections(response);
//       directionsCallback(response);
//     }
//   };

//   return (
//     <DirectionsService
//       options={{
//         destination: end,
//         origin: start,
//         travelMode: "DRIVING",
//       }}
//       callback={onDirectionsCallback}
//     />
//   );
// };

// class TestMap extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   onDirectionsCallback = (response) => {
//     if (response !== null) {
//       this.setState({ directions: response });
//     }
//   };
//   //A break end
//   // B break start
//   render() {
//     let latitudeA = this.props.latitudeA;
//     let longitudeA = this.props.longitudeA;

//     let latitudeB = this.props.latitudeB;
//     let longitudeB = this.props.longitudeB;

//     const center = { lat: latitudeA, lng: longitudeA };

//     const start = {
//       lat: this.props.latitudeB,
//       lng: this.props.longitudeB,
//     };
//     const end = {
//       lat: this.props.latitudeA,
//       lng: this.props.longitudeA,
//     };

//     return (
//       <LoadScript googleMapsApiKey="AIzaSyDxSuA9w2SdolXwys_ZKkS0F6ez5rbj7os">
//         <GoogleMap
//           mapContainerStyle={{ height: "440px", width: "100%" }}
//           zoom={14}
//           center={center}
//         >
//           <Directions
//             start={start}
//             end={end}
//             directionsCallback={this.onDirectionsCallback}
//             Marker="none"
//           >
//             <Marker position={start} title="Break Start" />
//             <Marker position={end} title="Break End" />
//           </Directions>
//           {this.state.directions && (
//             <DirectionsRenderer
//               options={{
//                 directions: this.state.directions,
//                 strokeColor: "#0000FF",
//                 strokeOpacity: 0,
//                 strokeWeight: 5,
//               }}
//             />
//           )}
//         </GoogleMap>
//       </LoadScript>
//     );
//   }
// }

// export default TestMap;




// //note *** test map is using in BreakHistory component
// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   Marker,
//   LoadScript,
//   Polyline,
//   DirectionsService,
//   DirectionsRenderer,
// } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const TestMap = (props) => {
//   console.log("props", props);
//   const origin = {
//     lat: props.latitudeA,
//     lng: props.longitudeA,
//   };
//   const destination = {
//     lat: props.latitudeB,
//     lng: props.longitudeB,
//   };
//   const polylinePath = props.polylinePath;

//   //const path1 = [origin, destination];

//   //const [directions, setDirections] = useState(null);
//   const [center, setCenter] = useState(null); // Define state for center
//   const [zoom, setZoom] = useState(12);
//   const handleZoomChanged = (mapInstance) => {
//     setZoom(mapInstance.getZoom());
//   };
//   const onLoad = (map) => {
//     if (map && typeof map.getMap === "function") {
//       setZoom(map.getMap().getZoom());
//     }
//   };
//   useEffect(() => {
//     if (window.google && window.google.maps) {
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: zoom,
//         center: center,
//       });
//       map.addListener("zoom_changed", () => handleZoomChanged(map));

//       return () => {
//         map.removeListener("zoom_changed", () => handleZoomChanged(map));
//       };
//     }
//   }, [center, zoom]);

//   // const directionsRequest = {
//   //   origin: origin,
//   //   destination: destination,
//   //   travelMode: "DRIVING",
//   // };

//   // Calculate center based on average latitude and longitude
//   const latc = [origin.lat, destination.lat];
//   const lonc = [origin.lng, destination.lng];
//   const averageLatitude =
//     latc.reduce((total, lat) => total + lat, 0) / latc.length;
//   const averageLongitude =
//     lonc.reduce((total, lng) => total + lng, 0) / lonc.length;
//   if (!center) {
//     // Check if center has been set
//     setCenter({ lat: averageLatitude, lng: averageLongitude });
//   }
//   //Break end = origin
//   //break start = destination
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDxSuA9w2SdolXwys_ZKkS0F6ez5rbj7os">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         gestureHandling="cooperative"
//         zoom={zoom}
//         center={center}
//         onLoad={onLoad}
//       >
//         <Marker
//           position={origin}
//           label={{
//             text: "E",
//             color: "white",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         />
//         <Marker
//           position={destination}
//           label={{
//             text: "S",
//             color: "white",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         />
//         {/* <DirectionsRenderer
//           options={{
//             directions: directions,
//             strokeColor: "#0000FF",
//             strokeOpacity: 0.8,
//             strokeWeight: 5,
//           }}
//         /> */}
//         {polylinePath && polylinePath.length > 0 && (
//           <Polyline
//             path={polylinePath}
//             options={{
//               strokeColor: "#FF0000",
//               strokeOpacity: 1,
//               strokeWeight: 2,
//             }}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default TestMap;

// import React from "react";

// const TestMap = (props) => {
//   const origin = {
//     lat: props.latitudeA,
//     lng: props.longitudeA,
//   };
//   const destination = {
//     lat: props.latitudeB,
//     lng: props.longitudeB,
//   };
//   const { latitudeA, longitudeA, latitudeB, longitudeB } = props;
//   const apiKey = "AIzaSyDxSuA9w2SdolXwys_ZKkS0F6ez5rbj7os";
//   const { polylinePath } = props;

//   const mapUrl = https://maps.googleapis.com/maps/api/staticmap?size=530x500&markers=color:blue%7Clabel:E%7C${latitudeA},${longitudeA}&markers=color:green%7Clabel:S%7C${latitudeB},${longitudeB}&path=weight:7%7Ccolor:blue%7Cenc:${polylinePath}&key=${apiKey}&output=embed;

//   return (
//     <div>
//       <img src={mapUrl} alt="Map" />
//     </div>
//   );
// };

// export default TestMap;

// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   Marker,
//   LoadScript,
//   PolylineF,
//   Polyline,
// } from "@react-google-maps/api";
// import polyline from "@mapbox/polyline";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const TestMap = (props) => {
//   console.log("propstestmap", props);
//   const origin = {
//     lat: props.latitudeA,
//     lng: props.longitudeA,
//   };
//   const destination = {
//     lat: props.latitudeB,
//     lng: props.longitudeB,
//   };
//   const polylinePath = props.polylinePath;

//   const [center, setCenter] = useState(null);
//   const [zoom, setZoom] = useState(12);

//   const handleZoomChanged = (mapInstance) => {
//     setZoom(mapInstance.getZoom());
//   };

//   const onLoad = (map) => {
//     if (map && typeof map.getMap === "function") {
//       setZoom(map.getMap().getZoom());
//     }
//   };

//   useEffect(() => {
//     if (window.google && window.google.maps) {
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: zoom,
//         center: center,
//       });
//       map.addListener("zoom_changed", () => handleZoomChanged(map));

//       return () => {
//         map.removeListener("zoom_changed", () => handleZoomChanged(map));
//       };
//     }
//   }, [center, zoom]);

//   const decodePolyline = (polylinePath) => {
//     return polyline.decode(polylinePath).map(([lng, lat]) => ({ lat, lng }));
//   };
//   const polylineCoordinates = decodePolyline(polylinePath);
//   // const path = polylineCoordinates.map((coordinate) => ({
//   //   lat: coordinate.lat,
//   //   lng: coordinate.lng,
//   // }));
//   const path = [origin, destination];
//   console.log("path", path);

//   // Calculate center based on average latitude and longitude
//   const latc = [origin.lat, destination.lat];
//   const lonc = [origin.lng, destination.lng];
//   const averageLatitude =
//     latc.reduce((total, lat) => total + lat, 0) / latc.length;
//   const averageLongitude =
//     lonc.reduce((total, lng) => total + lng, 0) / lonc.length;
//   if (!center) {
//     // Check if center has been set
//     setCenter({ lat: averageLatitude, lng: averageLongitude });
//   }
//   console.log("polylineCoordinates", polylineCoordinates);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDxSuA9w2SdolXwys_ZKkS0F6ez5rbj7os">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         gestureHandling="cooperative"
//         zoom={zoom}
//         center={center}
//         // onLoad={onLoad}
//       >
//         <Polyline
//           geodesic={true}
//           path={path}
//           options={{
//             strokeColor: "#FF0000",
//             strokeOpacity: 1.0,
//             strokeWeight: 2,
//           }}
//         />
//         <Marker
//           position={origin}
//           label={{
//             text: "E",
//             color: "white",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         />
//         <Marker
//           position={destination}
//           label={{
//             text: "S",
//             color: "white",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default TestMap;