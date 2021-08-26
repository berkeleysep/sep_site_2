import { Box, Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Hl5, Label1, Label2 } from "../shared/Typography";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

export default function ExecutivePhoto({path, name, position, pledge_class, major, description, linkedin, email}) {
  const PaddingBox = styled(Box)`
    padding-left: 5%;
    padding-right: 5%;
  `;

  const logo = require("../assets/paran.png");
  return (
    <PaddingBox style={{ borderBottom: "1px solid #e5e5e5" }}>
      <Box style={{display: "inline-block"}}>
        <img alt={name} src={logo}/>
      </Box>
      <Box style={{display: "inline-block"}}>
        <Hl5>{name}</Hl5>
        <Label2 style={{color: 'gray'}}>{position}, {pledge_class} Class</Label2>
        <Label2 style={{color: 'gray'}}>{major}</Label2>
        <Label1>{description}</Label1>
        <Box style={{display: "inline-block"}}>
          <IconButton href={linkedin}><LinkedInIcon /></IconButton>
          <IconButton href={email}><EmailIcon /></IconButton>
        </Box>
      </Box>
    </PaddingBox>
  );
};

ExecutivePhoto.defaultProps = {
  home: false,
  members: false,
  entrepreneurship: false,
  blog: false,
  recruitment: false
};