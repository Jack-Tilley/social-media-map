import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 38.745,
  lng: -75,
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDrWr8BB-qYSC1ggdOuz7vwnnjynAPECFA"
      libraries={["drawing", "places", "directions"]}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
