import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Bd2, St1 } from "../shared/Typography";

import LinkedInIcon from "../assets/linkedin.svg";

export default function MemberPhoto({
  path,
  name,
  pledge_class,
  major,
  linkedin,
  cc,
}) {
  const PaddingBox = styled(Box)`
    display: flex;
    flex-direction: column;
    min-height: 320px;
    max-width: 200px;
    margin-bottom: 48px;
    margin-right: 32px;
  `;

  const CCBox = styled(Box)`
    max-width: 60px;
    border-radius: 4px;
    padding: 2px 5px 2px 5px;
    position: relative;
    bottom: 32px;
    left: 10px;
    background-color: black;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
  `;

  return (
    <PaddingBox>
      <Box style={{ maxHeight: "200px", marginBottom: "20px" }}>
        <img
          alt={name}
          src={require("../assets/images/individual/" + path + ".png").default}
          style={{ maxHeight: "200px" }}
        />
        {cc && (
          <CCBox>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Coffee Chat
            </a>
          </CCBox>
        )}
      </Box>
      <Box>
        <St1 style={{ marginBottom: "4px" }}>{name}</St1>
        <Bd2 style={{ color: "#969BAB", marginBottom: "4px" }}>
          {pledge_class} Class, {major}
        </Bd2>
        <Box>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img alt="LinkedIn Icon" src={LinkedInIcon} />
          </a>
        </Box>
      </Box>
    </PaddingBox>
  );
}
