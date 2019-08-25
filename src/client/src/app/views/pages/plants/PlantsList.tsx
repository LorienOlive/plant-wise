import React, { useEffect } from "react";

import Grid from "../../../components/Grid/Grid";
import { IPlantProps } from "./PlantItem";

interface IPlantsListProps {
  children: JSX.Element;
}

const PlantList: React.FC<IPlantsListProps> = (props: IPlantsListProps) => {
  return <div>{props.children}</div>;
};

export default PlantList;
