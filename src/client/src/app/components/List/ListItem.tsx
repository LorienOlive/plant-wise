import React, { Fragment } from "react";
import styled from "styled-components";

interface IItemProps {
  size: string;
  children: JSX.Element;
}

const ListItem: React.FC<IItemProps> = (props: IItemProps) => {
  console.log(props);
  return <Wrapper>{props.children}</Wrapper>;
};

export default ListItem;

const Wrapper = styled.div`
  height: 200px;
  width: 300px;
  margin: 20px auto;
`;
