// Components==============
// =========================
// Components==============
import { M } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const ButtonWrapper = styled.div`
  position: relative;
  background-color: ${({ theme: { white } }) => white};
  color: ${({ theme: { black } }) => black};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 0.1fr 1fr;

  &:hover {
    .slider {
      width: 1100%;
    }

    .content {
      color: ${({ theme: { white } }) => white};
    }
  }
`;

const Slider = styled.div`
  width: 100%;
  background-color: ${({ theme: { primary } }) => primary.s4};
  grid-row: 1;
  transition: 0.8s;
`;

const Content = styled(M)`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s3} ${spacing.s7} ${spacing.s3} ${spacing.s4}`};

  grid-row: 1;
  justify-self: flex-start;
  transition: 0.3s;
`;

export default function SlideInButton({ children }) {
  return (
    <ButtonWrapper>
      <Grid>
        <Slider className="slider" />
        <Content className="content">{children}</Content>
      </Grid>
    </ButtonWrapper>
  );
}
