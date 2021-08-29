import React from "react";
import styled from "styled-components";
import { Box, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import SEPLogo from "../assets/SEP-logo-dark.svg";

const useStyles = makeStyles({
  logo: {
    opacity: (props) => (props.home ? "1" : "0.6"),
    height: "30px",
    "&:hover": {
      transition: ".3s ease-in",
      opacity: 1,
    },
  },
  membersButton: {
    color: (props) => (props.members ? "black" : "#969BAB"),
    textDecoration: (props) => (props.members ? "underline" : "none"),
    textUnderlineOffset: "6px",
    textTransform: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      transition: ".3s ease-in-out",
      color: "black",
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
  },
  entrepreneurshipButton: {
    color: (props) => (props.entrepreneurship ? "black" : "#969BAB"),
    textDecoration: (props) => (props.entrepreneurship ? "underline" : "none"),
    textUnderlineOffset: "6px",
    textTransform: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      transition: ".3s ease-in-out",
      color: "black",
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
  },
  blogButton: {
    color: (props) => (props.blog ? "black" : "#969BAB"),
    textDecoration: (props) => (props.blog ? "underline" : "none"),
    textUnderlineOffset: "6px",
    textTransform: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:hover": {
      transition: ".3s ease-in-out",
      color: "black",
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
  },
  recruitmentButton: {
    textTransform: "none",
    textDecoration: (props) => (props.recruitment ? "underline" : "none"),
    textUnderlineOffset: "4px",
    backgroundColor: "#8C30F5",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "10px",
    "&:hover": {
      transition: ".3s ease-in-out",
      backgroundColor: "#F1E4FF",
      color: "#8C30F5",
      cursor: "select",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
    },
  },
});

const PaddingBox = styled(Box)`
  padding-left: 10%;
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

export default function TopNav({
  home,
  members,
  entrepreneurship,
  blog,
  recruitment,
}) {
  const classes = useStyles({
    home,
    members,
    entrepreneurship,
    blog,
    recruitment,
  });

  return (
    <PaddingBox style={{ borderBottom: "1px solid #e5e5e5" }}>
      <NavBarContainer>
        <NavBarLeft>
          <NavBarItem
            to={{
              pathname: "/",
            }}
          >
            <Box className={classes.logo}>
              <img className={classes.logo} src={SEPLogo} alt="SEP Logo" />
            </Box>
          </NavBarItem>
        </NavBarLeft>
        <NavBarRight>
          <NavBarItem
            to={{
              pathname: "/members",
            }}
          >
            <Button className={classes.membersButton}>Members</Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/entrepreneurship",
            }}
          >
            <Button className={classes.entrepreneurshipButton}>
              Entrepreneurship
            </Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/blog",
            }}
          >
            <Button className={classes.blogButton}>Blog</Button>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <Button className={classes.recruitmentButton}>Recruitment</Button>
          </NavBarItem>
        </NavBarRight>
      </NavBarContainer>
    </PaddingBox>
  );
}

TopNav.defaultProps = {
  home: false,
  members: false,
  entrepreneurship: false,
  blog: false,
  recruitment: false,
};
