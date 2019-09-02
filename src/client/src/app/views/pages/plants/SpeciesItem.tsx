import React, { useEffect } from "react";
import styled from "styled-components";

import ListItem from "../../../components/List/ListItem";
// import GridItem from "../../../components/Grid/GridItem";

export interface ISpeciesProps {
  speciesItem: {
    id: string;
    common_name: string;
    images: {
      url: string;
    }
  };
}



/// this is th name of the constant, the type it is, the props that belond to it
const SpeciesItem: React.FC<ISpeciesProps> = (props: ISpeciesProps) => {
  const speciesItemDetail = props.speciesItem;
  console.log('////', speciesItemDetail.images);
  const speciesId = speciesItemDetail.id;
  return (
    <ListItem key={speciesItemDetail.common_name} size="large">
      <Wrapper>
        <Header>{speciesItemDetail.common_name}</Header>
        <p>{speciesItemDetail.id}</p>
      </Wrapper>
    </ListItem>
  );
};

export default SpeciesItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.h2`
  font-size: 2em;
  font-weight: 700;
`;

const Image = styled.img`
  width: 50px;
  height:  50px;
`
