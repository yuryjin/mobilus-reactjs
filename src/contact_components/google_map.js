import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 42.331429, lng: -83.045753 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class OurMap extends Component {
  render() {
    return (
      <div style={{ height: "42vh" }}>
        <WrappedMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBzSl9HdHkr2BaOosDVBCi2tv3neyTQVzQ"
          }
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}
