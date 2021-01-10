import React, { useState, useEffect } from "react";
import axios from "axios";
import { Polygon, Polyline } from "@react-google-maps/api";

const formatToPath = (geojson) => {
  let path = [];
  for (let i = 0; i < geojson.length; i++) {
    path.push({ lat: geojson[i][1], lng: geojson[i][0] });
  }
  return path;
};

const BoundsGetter = () => {
  const [bounds, setBounds] = useState([]);
  useEffect(() => {
    const getBounds = () => {
      axios
        .get(
          "https://nominatim.openstreetmap.org/search.php?q=philadelphia&polygon_geojson=1&format=jsonv2"
        )
        .then((res) => {
          console.log("RERENDER BOUNDSGETTER");
          setBounds(formatToPath(res.data[0].geojson.coordinates[0]));
        })
        .catch((err) => console.log(err));
    };
    getBounds();
  }, []);

  return <Polygon path={bounds} onClick={() => console.log("click")} />;
};

export default BoundsGetter;
