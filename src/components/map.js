import React from "react"
// import UseMaps from "../hooks/use-maps"
import GoogleMapReact from "google-map-react"

const Map = () => {
  // const useMaps = UseMaps()
  const defaultProps = {
    center: {
      lat: 40.622689,
      lng: -79.01502627,
    },
    zoom: 15,
  }

  // console.log('USE MAPS', useMaps)
  // const AnyReactComponent = () => <div><i className="fas fa-map-pin fa-2x"></i></div>;

  return (
    <>
      <div className="map-container" style={{ height: "22rem", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GATSBY_YOUR_GOOGLE_MAPS_GEOCODING_API_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent
            lat={useMaps.location.lat}
            lng={useMaps.location.lng}

          /> */}
        </GoogleMapReact>
      </div>
      {/* {useMaps.location.lat}<br />
      {useMaps.location.lng} */}
    </>
  )
}

export default Map
