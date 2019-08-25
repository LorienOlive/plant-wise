import React from "react";
import styled from "styled-components";

interface IListProps {
  size: string;
}

const List: React.FC<IListProps> = (props: IListProps) => {
  console.log(props);
  return <div>List</div>;
};

export default List;
