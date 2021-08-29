import React from "react";
import styled from "styled-components";
import { Box, Button, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { Bd1, Hl2, Hl3 } from "../shared/Typography";

const useStyles = makeStyles({
  applyButton: {
    textTransform: "none",
    textDecoration: (props) => (props.recruitment ? "underline" : "none"),
    backgroundColor: "#8C30F5",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      transition: ".3s ease-in-out",
      backgroundColor: "#F1E4FF",
      color: "#8C30F5",
      cursor: "select",
      textDecoration: "underline",
      textUnderlineOffset: "4px"
    },
  },
  customTimeline: {
    "&:before": {
      padding: "0px",
    }
  }
});

const FrontSpread = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  background-color: #969BAB;
  color: white;
  padding-left: 10%;
`;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
`

const InfoLeft = styled(Box)`
  background-color: #F4F5F7;
  min-width: 30%;
  padding: 76px 6% 76px 6%;
`

const InfoRight = styled(Box)`
  min-width: 70%;
  padding: 76px 5% 76px 5%;
`

const NavBarItem = styled(Link)`
  text-decoration: none;
  color: black;
  height: 40px;
`;

export default function Recruitment() {
  const classes = useStyles();

  return (
    <>
      <TopNav recruitment />
        <FrontSpread>
          <Hl2 style={{marginBottom: "8px"}}>
            Rush Sigma Eta Pi
          </Hl2>
          <Bd1 style={{marginBottom: "24px"}}>
            Be a part of UC Berkeley's Premier Entrepreneurship Fraternity
          </Bd1>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <Button className={classes.applyButton}>Apply Now</Button>
          </NavBarItem>
        </FrontSpread>
        <InfoBox>
          <InfoLeft>
            <Hl3 style={{marginBottom: "34px"}}>
              Rush Timeline
            </Hl3>







          </InfoLeft>
          <InfoRight>
            right here
          </InfoRight>
        </InfoBox>
      <BottomNav />
    </>
  );
}
