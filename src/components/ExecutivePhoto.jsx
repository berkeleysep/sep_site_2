import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { Bd3, St1 } from "../shared/Typography";
import LinkedInIcon from "../assets/linkedin.svg";

export default function ExecutivePhoto({
  path,
  name,
  position,
  pledge_class,
  major,
  bio,
  linkedin,
}) {
  const PaddingBox = styled(Box)`
    display: flex;
    flex-direction: row;
    min-height: 240px;
    width: 48%;
    margin-bottom: 48px;
    margin-right: 2%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  return (
    <PaddingBox>
      <Box style={{ maxHeight: "200px" }}>
        <img
          alt={name}
          src={require("../assets/images/individual/" + path + ".png").default}
          style={{ maxHeight: "200px", marginRight: "24px" }}
        />
      </Box>
      <Box>
        <St1 style={{ marginBottom: "12px" }}>{name}</St1>
        <Bd3 style={{ opacity: ".4" }}>
          {position}, {pledge_class} Class
        </Bd3>
        <Bd3 style={{ opacity: ".4", marginBottom: "8px" }}>{major}</Bd3>
        <Bd3 style={{ marginBottom: "8px", paddingRight: "16px" }}>{bio}</Bd3>
        <Box>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img alt="LinkedInIcon" src={LinkedInIcon} />
          </a>
        </Box>
      </Box>
    </PaddingBox>
  );
}
