import React, { useEffect } from "react";

import Grid from "../../../components/Grid/Grid";
import { ISpeciesProps } from "./SpeciesItem";

interface ISpeciesListProps {
  children: JSX.Element;
}

const SpeciesList: React.FC<ISpeciesListProps> = (props: ISpeciesListProps) => {
  return <div>{props.children}</div>;
};

export default SpeciesList;
