import React from "react";
import styled from "styled-components";

interface INavBarProps {
  size: string;
}

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  console.log(props);
  return <div>NavBar</div>;
};

export default NavBar;
