import React from "react";
import styled from "styled-components";

interface IGridProps {
  size: string;
}

const Grid: React.FC<IGridProps> = (props: IGridProps) => {
  console.log(props);
  return <div>Grid</div>;
};

export default Grid;
