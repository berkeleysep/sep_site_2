import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import { Bd2, Hl5, Hl6 } from "../shared/Typography";

const TimelineTitle = styled(Hl5)`
  color: #8c30f5;
`;

export default function TimelineItem({
  date,
  time,
  location,
  title,
  description,
}) {
  return (
    <Box>
      <Hl6 style={{ marginBottom: "6px" }}>
        {date} • {time} • {location}
      </Hl6>
      <TimelineTitle>{title}</TimelineTitle>
      <Bd2>{description}</Bd2>
    </Box>
  );
}

TimelineItem.defaultProps = {
  date: "Monday, Feb 5th",
  time: "TBD",
  location: "TBD",
  title: "Happy Birthday!",
  description: "",
};
