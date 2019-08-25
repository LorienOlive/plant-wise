import React from "react";
import styled from "styled-components";

interface IHamburgerProps {
  size: string;
}

const HamburgerMenu: React.FC<IHamburgerProps> = (props: IHamburgerProps) => {
  console.log(props);
  return <div>Grid</div>;
};

export default HamburgerMenu;
