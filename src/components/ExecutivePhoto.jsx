import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { Bd2, St1 } from "../shared/Typography";
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
  `;

  return (
    <PaddingBox>
      <Box style={{ maxHeight: "240px" }}>
        <img
          alt={name}
          src={require("../assets/images/individual/" + path + ".png").default}
          style={{ maxHeight: "240px", marginRight: "24px" }}
        />
      </Box>
      <Box>
        <St1 style={{ marginBottom: "12px" }}>{name}</St1>
        <Bd2 style={{ opacity: ".4" }}>
          {position}, {pledge_class} Class
        </Bd2>
        <Bd2 style={{ opacity: ".4", marginBottom: "8px" }}>{major}</Bd2>
        <Bd2 style={{ marginBottom: "8px" }}>{bio}</Bd2>
        <Box>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img alt="LinkedInIcon" src={LinkedInIcon} />
          </a>
        </Box>
      </Box>
    </PaddingBox>
  );
}
