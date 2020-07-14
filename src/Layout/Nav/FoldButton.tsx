// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Layout";
// =========================

const Button = styled(motion.svg)`
  z-index: 1000;
  position: fixed;
  cursor: pointer;
  width: 35px;
  left: 10px;
  top: 22.5px;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    left: 155px;
  }
`;

export default function FoldButton() {
  const { folded, setFolded, query } = useContext(AppContext);

  const buttonCondition = folded && query ? "open" : !query ? "open" : "closed";

  return (
    <Button
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        folded === true ? setFolded(false) : setFolded(true);
      }}
      animate={buttonCondition}
      initial={false}
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: -150,
        },
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 130,
      }}
    >
      <motion.path
        animate={folded ? "open" : "closed"}
        variants={{
          open: {
            rotate: 0,
          },
          closed: {
            rotate: 180,
          },
        }}
        d="M13.83 19C13.6806 19.0005 13.533 18.9676 13.398 18.9035C13.263 18.8395 13.1441 18.7461 13.05 18.63L8.21998 12.63C8.0729 12.4511 7.99249 12.2267 7.99249 11.995C7.99249 11.7634 8.0729 11.539 8.21998 11.36L13.22 5.36003C13.3897 5.15581 13.6336 5.02739 13.8981 5.00301C14.1625 4.97863 14.4258 5.06029 14.63 5.23003C14.8342 5.39977 14.9626 5.64368 14.987 5.90811C15.0114 6.17253 14.9297 6.43581 14.76 6.64003L10.29 12L14.61 17.36C14.7323 17.5068 14.8099 17.6856 14.8338 17.8751C14.8577 18.0647 14.8268 18.2571 14.7447 18.4296C14.6627 18.6021 14.5329 18.7475 14.3708 18.8486C14.2087 18.9497 14.021 19.0023 13.83 19Z"
        fill="#2B2B2B"
      />
    </Button>
  );
}
