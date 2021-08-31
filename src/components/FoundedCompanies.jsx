import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Bd2, St1 } from "../shared/Typography";

const PaddingBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  width: 270px;
  margin-bottom: 48px;
  margin-right: 32px;
`;

const ExploreLink = styled.a`
  text-decoration: none;
  color: #8c30f5;
`;

export default function FoundedCompanies({ path, name, description, urlsrc }) {
  return (
    <PaddingBox>
      <img
        alt={name}
        src={require("../assets/images/careers/" + path + ".png").default}
        style={{ maxHeight: "250px", marginBottom: "8px" }}
      />
      <St1 style={{ marginBottom: "4px" }}>{name}</St1>
      <Bd2 style={{ marginBottom: "8px" }}>{description}</Bd2>
      <ExploreLink href={urlsrc} target="_blank" rel="noreferrer">
        Explore
      </ExploreLink>
    </PaddingBox>
  );
}
