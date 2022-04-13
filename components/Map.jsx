import * as React from 'react'
import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults?.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/eunjinii/cl1w3v1js008c15qj4oarpi1o"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(viewport) => setViewport(viewport)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
              aria-label="push-pin"
            >
              ❤️
            </p>
          </Marker>

          {/* the popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            <div>1234</div>
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
