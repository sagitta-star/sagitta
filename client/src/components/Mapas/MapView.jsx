import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import '../../css/Mapa.css';


const MapView = () => {

const Sucursales = [25.7884, -100.2646]; 
  const position = [25.7885, -100.2636];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "60vh", minWidth: "60vw", justifyContent: "center" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Usted esta aqui
        </Popup>
      </Marker>
      <Marker position={Sucursales}>
        <Popup>
          sucursal 
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
