import React, { useState } from "react";
import { Polygon } from "@react-google-maps/api";

const BoundaryPolygon = ({ bounds }) => {
  const [color, setColor] = useState("black");

  const handlePolygonClick = () => {
    color === "black" ? setColor("blue") : setColor("green");
  };
  return (
    <Polygon
      path={bounds}
      onClick={handlePolygonClick}
      options={{ strokeColor: color, fillColor: color }}
    />
  );
};

export default BoundaryPolygon;
