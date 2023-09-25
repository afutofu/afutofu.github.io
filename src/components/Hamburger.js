import React, { forwardRef } from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 25px;
  height: 3px;

  transition: background-color 0.1s linear;
`;

const HamburgerComp = styled.div`
  position: absolute;
  top: 22px;
  right: calc(5% + 4px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: unset;
  height: 18px;
  cursor: pointer;

  :hover {
    ${Line} {
      background-color: ${(props) => (props.isOpen ? "black" : "#ff350d")};
    }
  }

  ${Line} {
    background-color: ${(props) => (props.isOpen ? "#ff350d" : "black")};
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = forwardRef((props, ref) => {
  const { isOpen, onClick } = props;

  return (
    <HamburgerComp ref={ref} isOpen={isOpen} onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </HamburgerComp>
  );
});

export default Hamburger;
