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
    defaultCenter={{ lat: 48.432664, lng: -123.321773 }}
  >
    <Marker
      position={{ lat: 48.432664, lng: -123.321773 }}
    />
  </GoogleMap>
));

export default MapWithAMarker
