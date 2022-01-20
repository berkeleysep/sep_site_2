import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Bd2, Bd3, St1 } from "../shared/Typography";

const PaddingBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  margin-bottom: 24px;
  margin-right: 48px;
  width: 300px;
`;

const ExploreLink = styled.a`
  text-decoration: none;
  color: #8c30f5;
`;

export default function FoundedCompanies({
  path,
  founders,
  name,
  description,
  urlsrc,
}) {
  return (
    <PaddingBox>
      <div style={{ display: "flex", height: "150px" }}>
        <img
          alt={name}
          src={require("../assets/images/careers/" + path + ".png").default}
          style={{
            maxWidth: "300px",
            marginBottom: "8px",
            alignSelf: "center",
          }}
        />
      </div>
      <Box>
        <St1 style={{ marginBottom: "4px" }}>{name}</St1>
        <Bd3 style={{ marginBottom: "16px" }}>{founders}</Bd3>
        <Bd2 style={{ marginBottom: "8px" }}>{description}</Bd2>
        <ExploreLink href={urlsrc} target="_blank" rel="noreferrer">
          Explore
        </ExploreLink>
      </Box>
    </PaddingBox>
  );
}
