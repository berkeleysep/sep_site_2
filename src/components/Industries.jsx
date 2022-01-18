import React from "react";
import styled from "styled-components";
import { Bd1, Hl4 } from "../shared/Typography";
import { Box } from "@material-ui/core";

export default function Industries({ title, description, companyPaths }) {
  return (
    <Box>
      <Hl4>{title}</Hl4>
      <Bd1>{description}</Bd1>
      {companyPaths.map((name) => {
        return (
          <img
            alt={name}
            src={require("../assets/images/careers/" + name + ".png").default}
            style={{ maxHeight: "140px" }}
          />
        );
      })}
    </Box>
  );
}
