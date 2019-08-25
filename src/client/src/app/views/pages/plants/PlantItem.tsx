import React, { useEffect } from "react";
import styled from "styled-components";

import ListItem from "../../../components/List/ListItem";
// import GridItem from "../../../components/Grid/GridItem";

export interface IPlantProps {
  plant: {
    id: string;
    slug: string;
    scientific_name: string;
    link: string;
    complete_data: boolean;
    common_name: string;
    images: {
      url: string;
    }
  };
}


const PlantItem: React.FC<IPlantProps> = (props: IPlantProps) => {
  const plantDetail = props.plant;
  return (
    <ListItem key={plantDetail.id} size="large">
      <Wrapper>
        <Header>{plantDetail.common_name}</Header>
        <div>{plantDetail.link}</div>
      </Wrapper>
    </ListItem>
  );
};

export default PlantItem;

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
