import React from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import BoundsGetter from "./BoundsGetter";

const containerStyle = {
  width: "40%",
  height: "100vh",
};

const center = {
  lat: 39.952583,
  lng: -75.165222,
};
const options = {
  disableDefaultUI: true,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDrWr8BB-qYSC1ggdOuz7vwnnjynAPECFA"
      libraries={["drawing", "places", "directions"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {/* <Polygon path={bounds}/> */}
        <BoundsGetter />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
