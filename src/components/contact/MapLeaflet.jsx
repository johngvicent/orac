import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix for default marker icons when bundling (Vite/Webpack)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

function MapLeaflet({ center, zoom, popupLabel }) {
  const position = useMemo(() => ({ lat: center.lat, lng: center.lng }), [center.lat, center.lng])

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}>
        <Popup>{popupLabel}</Popup>
      </Marker>
    </MapContainer>
  )
}

MapLeaflet.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number,
  popupLabel: PropTypes.string,
}

MapLeaflet.defaultProps = {
  zoom: 15,
  popupLabel: 'Plaza Europa, Zaragoza',
}

export default MapLeaflet
