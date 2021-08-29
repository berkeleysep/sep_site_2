import React from "react";
import { Box } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const PhotoBox = styled(Box)`
  width: 125px;
  height: 125px;
  position: absolute;
  top: ${(props) => props.positionTop}%;
  left: ${(props) => props.positionLeft}%;
`;

const Img = styled.img`
  opacity: 0;
  width: 125px;
  height: 125px;
  animation: ${(props) => props.duration}ms ${fadeInOut} ease-in-out;
  animation-delay: ${(props) => props.stagger}ms;
`;

export default function AnimationPhoto({ path, delay, stagger }) {
  const positionTop = Math.floor(Math.random() * 80);
  const positionLeft = Math.floor(Math.random() * 100);

  return (
    <PhotoBox positionTop={positionTop} positionLeft={positionLeft}>
      <Img
        duration={delay}
        stagger={stagger}
        src={require("../assets/images/individual/" + path + ".png").default}
      />
    </PhotoBox>
  );
}
