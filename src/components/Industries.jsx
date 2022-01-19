import React from "react";
import styled from "styled-components";
import { Bd1, Hl4 } from "../shared/Typography";
import { Box } from "@material-ui/core";

export default function Industries({ title, description, companyPaths }) {
  return (
    <Box style={{ marginBottom: "32px" }}>
      <Hl4>{title}</Hl4>
      <Bd1 style={{ marginBottom: "16px" }}>{description}</Bd1>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {companyPaths.map((name) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                alt={name}
                src={
                  require("../assets/images/careers/" + name + ".png").default
                }
                style={{
                  maxHeight: "62px",
                  maxWidth: "82px",
                  marginRight: "30px",
                  alignSelf: "center",
                }}
              />
            </div>
          );
        })}
      </div>
    </Box>
  );
}
