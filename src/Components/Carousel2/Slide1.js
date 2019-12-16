// Components==============
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import SwitchImp from "./Arrow.inline.svg";
// =========================

const Slider1 = styled(Slider)`
  max-width: 1000px;
  margin: 0 auto;

  /* ====== */
  /* ARROWS */
  /* ====== */

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  #leftArrow {
    transform: translate(0, -50%);
  }

  #rightArrow {
    transform: translate(0, -50%) rotate(180deg);
  }
`;

const CarouselArrow = styled(SwitchImp)`
  .backgroundSvg {
    fill: ${({ theme: { primary } }) => primary.s4};
  }

  .arrowSvg {
    fill: ${({ theme: { white } }) => white};
  }
`;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick}>
      <CarouselArrow className={className} id="rightArrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick}>
      <CarouselArrow className={className} id="leftArrow" />
    </button>
  );
}

export default function Slide1({ children, setNav1, nav2 }) {
  const mediaQ = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 800px)");

    if (Query.matches) {
      return true;
    } else {
      return false;
    }
  };

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: mediaQ()
  };

  return (
    <Slider1 {...settings} asNavFor={nav2} ref={slider => setNav1(slider)}>
      {children}
    </Slider1>
  );
}

// const [nav1, setNav1] = useState(null);
// const [nav2, setNav2] = useState(null);
//     <Slide1 setNav1={setNav1} nav2={nav2}>

//     </Slide1>
//     <Slide2 setNav2={setNav2} nav1={nav1}>

//     </Slide2>
