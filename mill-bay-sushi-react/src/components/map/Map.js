import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 48.651340, lng: -123.558528 }}
  >
    <Marker
      position={{ lat: 48.651340, lng: -123.558528 }}
    />
  </GoogleMap>
));

export default MapWithAMarker
