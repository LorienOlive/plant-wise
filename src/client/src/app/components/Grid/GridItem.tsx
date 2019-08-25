import React from "react";
import styled from "styled-components";

interface IGridItemProps {
  size: string;
}

const GridItem: React.FC<IGridItemProps> = (props: IGridItemProps) => {
  console.log(props);
  return <div>Grid Item</div>;
};

export default GridItem;
