import React from "react";
import { Box } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const fadeInOut = (opacity) => keyframes`
  0% {
    opacity: 0;
  }
 10% {
    opacity: ${opacity};
  }
  25% {
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
  animation: ${(props) => props.duration * 4}ms
    ${(props) => fadeInOut(props.opacity)} ease-in-out infinite;
  animation-delay: ${(props) => props.stagger * 2}ms;
`;

export default function AnimationPhoto({ path, delay, stagger, mobile }) {
  const positionTop = Math.floor(Math.random() * 80);
  const positionLeft = mobile
    ? 10 + Math.floor(Math.random() * 60)
    : 10 + Math.floor(Math.random() * 70);
  const opacity = mobile ? ".25" : ".75";

  return (
    <PhotoBox positionTop={positionTop} positionLeft={positionLeft}>
      <Img
        duration={delay}
        stagger={stagger}
        opacity={opacity}
        src={require("../assets/images/individual/" + path + ".png").default}
      />
    </PhotoBox>
  );
}
