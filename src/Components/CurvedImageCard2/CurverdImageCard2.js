// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import CurveImp from "./Curve.inline.svg";

// =========================

const Card = styled.div`
  display: flex;
  position: relative;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  width: 100%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Image = styled(Img)`
  width: 40%;
  height: 100%;
`;

const CurveSvg = styled(CurveImp)`
  height: 105%;
  width: 40%;
  position: absolute;
  left: 18.5%;
  top: -2.5%;
  transform: scale(1);

  #changeColor {
    fill: ${({ theme: { white } }) => white};
  }
`;

const Content = styled.div`
  z-index: 1;
`;

export default function CurvedImageCard2({ img, children }) {
  return (
    <Card>
      <Image fluid={img} alt="StockImg" />
      <CurveSvg />
      <Content>{children}</Content>
    </Card>
  );
}

/* <CurvedImageCard2 img={data.file.childImageSharp.fluid}></CurvedImageCard2> */