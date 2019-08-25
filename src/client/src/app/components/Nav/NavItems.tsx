import React from "react";
import styled from "styled-components";

interface INavItemProps {
  size: string;
}

const NavItem: React.FC<INavItemProps> = (props: INavItemProps) => {
  console.log(props);
  return <div>NavItem</div>;
};

export default NavItem;
