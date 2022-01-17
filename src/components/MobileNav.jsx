import React, { useState } from "react";
import { Drawer, IconButton, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileNavContainer = styled(Box)`
  display: flex;
  padding-left: 20px;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ClickableNavBox = styled(Box)`
  padding: 20px 60px 20px 40px;

  &:hover {
    cursor: pointer;
  }
`;

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <MobileNavContainer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <Box style={{ paddingTop: "20px" }}>
          <NavLink to={{ pathname: "/" }}>
            <ClickableNavBox>Home</ClickableNavBox>
          </NavLink>
          <NavLink to={{ pathname: "/members" }}>
            <ClickableNavBox>Members</ClickableNavBox>
          </NavLink>
          <NavLink to={{ pathname: "/entrepreneurship" }}>
            <ClickableNavBox>Entrepreneurship</ClickableNavBox>
          </NavLink>
          <NavLink to={{ pathname: "" }}>
            <ClickableNavBox
              onClick={() =>
                window.open(
                  "https://medium.com/sep-berkeley/tagged/uc-berkeley",
                  "_blank"
                )
              }
            >
              Blog
            </ClickableNavBox>
          </NavLink>
          <NavLink to={{ pathname: "/recruitment" }}>
            <ClickableNavBox>Recruitment</ClickableNavBox>
          </NavLink>
        </Box>
      </Drawer>
    </MobileNavContainer>
  );
}
