import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const EmbedContainer = styled(Box)`
  width: 100%;
  height: 100%;
`

const YoutubeEmbed = ({ embedId }) => (
  <EmbedContainer>
    <iframe
      style={{
        width: "100%",
        height: "100%"
      }}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </EmbedContainer>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
