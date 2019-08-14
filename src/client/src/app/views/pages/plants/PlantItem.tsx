import React, { useEffect } from "react";

interface IPlantProps {
  plant: {
    id: string;
    slug: string;
    scientific_name: string;
    link: string;
    complete_data: boolean;
    common_name: string;
  };
}

const PlantItem: React.FC<IPlantProps> = (props: IPlantProps) => {
  console.log(props.plant);
  const plantDetail = props.plant;
  return <div key={props.plant.id}>{plantDetail.common_name}</div>;
};

export default PlantItem;
