import React from "react";
import styled from "styled-components";
import { Box, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import SEPLogo from "../assets/SEP-logo-dark.svg";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      color: "blue",
      backgroundColor: "transparent"
    }
  },
  recruitmentButton: {
    textTransform: "none",
    backgroundColor: "#8C30F5",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "10px",
    "&:hover": {
      color: "blue"
    }
  }
})

const PaddingBox = styled(Box)`
  padding-left: 6%;
  padding-right: 10%;
`;

const NavBarContainer = styled(Box)`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavBarLeft = styled(Box)``;

const NavBarRight = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const NavBarItem = styled(Link)`
  text-decoration: none;
  color: black;
  height: 40px;
`;

export default function TopNav() {
  const classes = useStyles()

  return (
    <PaddingBox style={{ borderBottom: "1px solid #e5e5e5" }}>
      <NavBarContainer>
        <NavBarLeft>
          <NavBarItem
            to={{
              pathname: "/",
            }}
          >
            <img src={SEPLogo} alt="SEP Logo" style={{ height: "35px" }} />
          </NavBarItem>
        </NavBarLeft>
        <NavBarRight>
          <NavBarItem
            to={{
              pathname: "/members",
            }}
          >
            <Button className={classes.button}>
              Members
            </Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/entrepreneurship",
            }}
          >
            <Button className={classes.button}>
              Entrepreneurship
            </Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/blog",
            }}
          >
            <Button className={classes.button}>
              Blog
            </Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <Button className={classes.recruitmentButton}>
              Recruitment
            </Button>
          </NavBarItem>
        </NavBarRight>
      </NavBarContainer>
    </PaddingBox>
  );
}
