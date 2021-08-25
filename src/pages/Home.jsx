import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import { Hl2, Bd1, Hl3, Hl4, Bd2 } from "../shared/Typography";

const StatsBox = styled(Box)`
  border-left: 3px solid #8C30F5;
  padding-left: 16px;
  width: 100px;
`

function Stats({number, descriptor}) {
  return (
    <StatsBox>
      <Hl4>
        {number}
      </Hl4>
      <Bd2>
        {descriptor}
      </Bd2>
    </StatsBox>
  )
};

const useStyles = makeStyles({
  familyButton: {
    textTransform: "none",
    height: "40px",
    width: "165px",
    backgroundColor: "#F1E4FF",
    color: "#8C30F5",
  },
  ventureButton: {
    textTransform: "none",
    height: "40px",
    width: "150px",
    backgroundColor: "#F1E4FF",
    color: "#8C30F5",
  }
});

const FrontSpread = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 50px;
`;

const WhoWeAre = styled(Box)`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 76px;
`;

const WhatWeDo = styled(Box)`
  display: flex;
  flex-direction: row;
  padding-top: 76px;
  background-color: #F4F5F7;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 76px;
`

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <TopNav home />
      <FrontSpread>
        <Box style={{ width: "60%" }}>
          <Hl2 style={{ marginBottom: "16px" }}>
            UC Berkeley's Premier Entrepreneurship Fraternity
          </Hl2>
          <Bd1>
            Here at Sigma Eta Pi, we do something...
          </Bd1>`
        </Box>
      </FrontSpread>
      <WhoWeAre>
        <Box style={{ width: "40%", marginRight: "10%" }}>
          <Box style={{ height: "100%", backgroundColor: "grey"}}>
            pic here
          </Box>
        </Box>
        <Box style={{ width: "50%"}}>
          <Hl3 style={{ marginBottom: "32px" }}>
            Who we are
          </Hl3>
          <Bd1 style={{ marginBottom: "40px" }}>
            Sigma Eta Pi is UC Berkeley’s premier co-ed entrepreneurship fraternity. Our mission is to transform individuals into starters who follow their passion, develop lasting relationships, and create value through innovative pursuits.
          </Bd1>
          <Box style={{ display: "flex", flexDirection: "row", marginBottom: "32px" }}>
            <Stats number="22" descriptor="Majors"/>
            <Stats number="50" descriptor="Actives"/>
            <Stats number="18" descriptor="Countries"/>
            <Stats number="30" descriptor="Ventures"/>
          </Box>
          <Link to={{pathname: "/members"}} style={{textDecoration: "none"}}>
            <Button className={classes.familyButton}>
              Meet the Family <ArrowRightAltIcon style={{marginLeft: "6px"}}/>
            </Button>
          </Link>
        </Box>
      </WhoWeAre>
      <WhatWeDo>
          <Box style={{width: "55%", marginRight: "10%"}}>
            <Hl3 style={{marginBottom: "48px"}}>
              What we do: entrepreneurship
            </Hl3>
            <Bd1 style={{width: "90%", marginBottom: "40px"}}>
              We educate our actives with the most comprehensive knowledge of the startup ecosystem and venture processes and equip them with a concrete set of skills sourced from the diverse backgrounds of our house.
            </Bd1>
            <Bd1 style={{width: "90%", marginBottom: "32px"}}>
              Our actives go on to accomplish amazing things. These include starting ventures that go on to be backed by Y-Combinator and acquired by Square for $90 million, and finding successful careers at top companies.
            </Bd1>
            <Link to={{pathname: "/entrepreneurship"}} style={{textDecoration: "none"}}>
              <Button className={classes.ventureButton}>
                Our Ventures <ArrowRightAltIcon style={{marginLeft: "6px"}}/>
              </Button>
            </Link>
          </Box>
          <Box style={{width: "35%"}}>
            <Box style={{ height: "100%", backgroundColor: "grey"}}>
              pic here
            </Box>
          </Box>
      </WhatWeDo>
    </>
  );
}
