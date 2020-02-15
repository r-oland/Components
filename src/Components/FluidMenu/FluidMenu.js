// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { HamburgerContext } from "../../Layout/Layout";
import TLink from "../TLink";
// =========================

const Hide = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const Menu = styled(motion.div)`
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 152;

  margin-top: 12vh;

  button {
    margin-bottom: 4vh;
  }

  a {
    color: ${({ theme: { white } }) => white};
    font-size: 20px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Blur = styled(motion.div)`
  cursor: default;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 149;
  background-color: black;
  top: 0;
  left: 0;
`;

export default function FluidMenu({ to }) {
  const { menuState, changeMenu } = useContext(HamburgerContext);

  return (
    <Hide>
      <Menu
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            display: "flex"
          },

          hidden: {
            transitionEnd: {
              display: "none"
            }
          }
        }}
        initial={false}
      >
        <button onClick={changeMenu}>
          <TLink to={to}>page 1</TLink>
        </button>
        <button onClick={changeMenu}>
          <TLink to={to}>page 2</TLink>
        </button>
        <button onClick={changeMenu}>
          <TLink to={to}>page 3</TLink>
        </button>
        <button onClick={changeMenu}>
          <TLink to={to}>page 4</TLink>
        </button>
        <button onClick={changeMenu}>
          <TLink to={to}>page 5</TLink>
        </button>
      </Menu>
      <Blur
        onClick={changeMenu}
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            opacity: 0.7,
            display: "block"
          },

          hidden: {
            opacity: 0,
            transitionEnd: {
              display: "none"
            }
          }
        }}
        initial={false}
      />
    </Hide>
  );
}