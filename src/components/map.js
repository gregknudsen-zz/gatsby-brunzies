import React from "react"
import UseMaps from "../hooks/use-maps"
import GoogleMapReact from "google-map-react"

const Map = () => {
  const useMaps = UseMaps();
  const defaultProps = {
    center: {
      lat: useMaps.location.lat,
      lng: useMaps.location.lng
    },
    zoom: 16
  };
  
  console.log('USE MAPS', useMaps)
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
    <div style={{ height: '22rem', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_YOUR_GOOGLE_MAPS_GEOCODING_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={useMaps.location.lat}
            lng={useMaps.location.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      {/* {useMaps.location.lat}<br />
      {useMaps.location.lng} */}
    </>

  )
}

export default Map;