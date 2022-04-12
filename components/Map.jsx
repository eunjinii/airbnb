import * as React from 'react'
import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
// import 'mapbox-gl/dist/mapbox-gl.css'

function Map({ searchResults }) {
  const coordinates = searchResults?.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/eunjinii/cl1w3v1js008c15qj4oarpi1o"
      mapboxAccessToken={process.env.mapbox_key}
      onViewportChange={(viewport) => {
        setViewport(viewport)
      }}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="animate-bounce cursor-pointer text-2xl">❤️</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
