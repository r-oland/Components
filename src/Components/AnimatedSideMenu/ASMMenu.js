// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const Hide = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
`;

const Menu = styled.div`
  background-color: ${({ theme: { white } }) => white};
  width: ${({ menuState }) =>
    menuState === "open" ? "calc(250px + 10vw)" : `0`};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.8s;

  ul {
    display: inline-block;
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.8s;
    margin-top: 5em;
  }

  li {
    cursor: pointer;
    transition: 0.2s;
    margin: 4em 0;

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

const Blur = styled.div`
  position: fixed;
  opacity: ${({ menuState }) => (menuState === "open" ? `0.3` : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? `visible` : `hidden`};
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: black;
  top: 0;
  left: 0;
  transition: 0.8s;
`;

export default function ASMMenu({ menuState, setMenuState }) {
  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <Hide>
      <Menu menuState={menuState}>
        <Container>
          <ul>
            <li onClick={changeMenu}>page 1</li>

            <li onClick={changeMenu}>page 2</li>

            <li onClick={changeMenu}>page 3</li>

            <li onClick={changeMenu}>page 4</li>
          </ul>
        </Container>
      </Menu>
      <Blur menuState={menuState} />
    </Hide>
  );
}
