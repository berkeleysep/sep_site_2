import { Box, Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Hl5, Label1, Label2 } from "../shared/Typography";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

export default function MemberPhoto({path, name, pledge_class, major, linkedin, email, cc}) {
  const PaddingBox = styled(Box)`
    padding-left: 5%;
    padding-right: 5%;
    display: inline-block;
  `;

  const logo = require("../assets/paran.png");
  return (
    <PaddingBox style={{ borderBottom: "1px solid #e5e5e5" }}>
      <Box>
        <img alt={name} src={logo}/>
      </Box>
      <Box>
        <Hl5>{name}</Hl5>
        <Label2 style={{color: 'gray'}}>{pledge_class} Class, {major}</Label2>
        <Box style={{display: "inline-block"}}>
          <IconButton href={linkedin}><LinkedInIcon /></IconButton>
          <IconButton href={email}><EmailIcon /></IconButton>
        </Box>
      </Box>
    </PaddingBox>
  );
};

MemberPhoto.defaultProps = {
  home: false,
  members: false,
  entrepreneurship: false,
  blog: false,
  recruitment: false
};