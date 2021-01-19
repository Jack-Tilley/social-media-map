import React, { useState, useEffect } from "react";
import axios from "axios";
import BoundaryPolygon from "./BoundaryPolygon";

const formatToPath = (geojson) => {
  let path = [];
  for (let i = 0; i < geojson.length; i++) {
    path.push({ lat: geojson[i][1], lng: geojson[i][0] });
  }
  return path;
};

const BoundsGetter = () => {
  // customize this
  const [bounds, setBounds] = useState([]);
  useEffect(() => {
    const getBounds = () => {
      axios
        .get(
          "https://nominatim.openstreetmap.org/search.php?q=philadelphia&polygon_geojson=1&format=jsonv2"
        )
        .then((res) => {
          //   console.log("RERENDER BOUNDSGETTER");
          setBounds(formatToPath(res.data[0].geojson.coordinates[0]));
        })
        .catch((err) => console.log(err));
    };
    getBounds();
  }, []);

  return <BoundaryPolygon bounds={bounds} />;
};

export default BoundsGetter;
