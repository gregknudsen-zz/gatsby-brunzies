import React from "react"
import UseMaps from "../hooks/use-maps"

const Map = () => {
  const useMaps = UseMaps();
  console.log('USE MAPS', useMaps)
  return (
    <>
      {useMaps.location.lat}<br />
      {useMaps.location.lng}
    </>

  )
}

export default Map;