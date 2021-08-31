import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import AnimationPhoto from "../components/AnimationPhoto";
import Expire from "../components/Expire";
import { Hl2, Bd1, Hl3, Hl4, Bd2 } from "../shared/Typography";
import actives from "../actives.json";

const StatsBox = styled(Box)`
  border-left: 3px solid #8c30f5;
  padding-left: 16px;
  width: 100px;
`;

function Stats({ number, descriptor }) {
  return (
    <StatsBox>
      <Hl4>{number}</Hl4>
      <Bd2>{descriptor}</Bd2>
    </StatsBox>
  );
}

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
  },
  recruitButton: {
    textTransform: "none",
    height: "40px",
    width: "200px",
    backgroundColor: "#F1E4FF",
    color: "#8C30F5",
  },
});

const FrontSpread = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 80vh;
  margin-bottom: 50px;
  position: relative;
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
  background-color: #f4f5f7;
  padding: 76px 10% 76px 10%;
`;

const OurBlog = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 76px 10% 76px 10%;
`;

const RushSEP = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 76px 10% 76px 10%;
  min-height: 30vh;
  // background-color: #f4f5f7;
`;

function Home() {
  const classes = useStyles();

  return (
    <>
      <TopNav home />
      <FrontSpread className="frontSpread">
        <Box style={{ width: "60%", zIndex: "100" }}>
          <Hl2 style={{ marginBottom: "16px" }}>
            UC Berkeley's Premier Entrepreneurship Fraternity
          </Hl2>
          <Bd1>Here at Sigma Eta Pi, we are building the future...</Bd1>`
        </Box>
        {actives.images.map((path, index) => {
          const min = 3000;
          const max = 4000;
          const expiration = Math.floor(Math.random() * max) + min;
          const stagger = index * 700;

          return (
            <Expire delay={expiration + stagger}>
              <AnimationPhoto
                path={path}
                delay={expiration}
                stagger={stagger}
              />
            </Expire>
          );
        })}
      </FrontSpread>
      <WhoWeAre>
        <Box style={{ width: "40%", marginRight: "10%" }}>
          <Box style={{ width: "100%", overflow: "hidden" }}>
            <img
              style={{ width: "100%" }}
              alt="camping-trip-1"
              src={require("../assets/images/group/camping-trip-1.JPG").default}
            />
          </Box>
        </Box>
        <Box style={{ width: "50%" }}>
          <Hl3 style={{ marginBottom: "32px" }}>Who we are</Hl3>
          <Bd1 style={{ marginBottom: "40px" }}>
            Sigma Eta Pi is UC Berkeley’s premier co-ed entrepreneurship
            fraternity. Our mission is to transform individuals into starters
            who follow their passion, develop lasting relationships, and create
            value through innovative pursuits.
          </Bd1>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "32px",
            }}
          >
            <Stats number="22" descriptor="Majors" />
            <Stats number="50" descriptor="Actives" />
            <Stats number="18" descriptor="Countries" />
            <Stats number="30" descriptor="Ventures" />
          </Box>
          <Link
            to={{ pathname: "/members" }}
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.familyButton}>
              Meet the Family{" "}
              <ArrowRightAltIcon style={{ marginLeft: "6px" }} />
            </Button>
          </Link>
        </Box>
      </WhoWeAre>
      <WhatWeDo>
        <Box style={{ width: "55%", marginRight: "10%" }}>
          <Hl3 style={{ marginBottom: "48px" }}>
            What we do: entrepreneurship
          </Hl3>
          <Bd1 style={{ width: "90%", marginBottom: "40px" }}>
            We educate our actives with the most comprehensive knowledge of the
            startup ecosystem and venture processes and equip them with a
            concrete set of skills sourced from the diverse backgrounds of our
            house.
          </Bd1>
          <Bd1 style={{ width: "90%", marginBottom: "32px" }}>
            Our actives go on to accomplish amazing things. These include
            starting ventures that go on to be backed by Y-Combinator and
            acquired by Square for $90 million, to finding successful careers at
            top companies.
          </Bd1>
          <Link
            to={{ pathname: "/entrepreneurship" }}
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.ventureButton}>
              Our Ventures <ArrowRightAltIcon style={{ marginLeft: "6px" }} />
            </Button>
          </Link>
        </Box>
        <Box style={{ width: "35%" }}>
          <Box style={{ height: "100%", backgroundColor: "grey" }}>
            pic here
          </Box>
        </Box>
      </WhatWeDo>
      {/* <OurBlog>
        <Hl3 style={{ marginBottom: "48px" }}>Our blog</Hl3>
      </OurBlog> */}
      <RushSEP>
        <Box style={{ width: "30%", marginRight: "10%" }}>
          <Box style={{ height: "100%", overflow: "hidden" }}>
            <img
              style={{ width: "100%" }}
              alt="tim-joelene"
              src={require("../assets/images/group/tim-joelene.png").default}
            />
          </Box>
        </Box>
        <Box style={{ width: "60%" }}>
          <Hl3 style={{ marginBottom: "32px" }}>Interested in joining SEP?</Hl3>
          <Bd1 style={{ marginBottom: "32px" }}>
            Come be a part of our amazing brotherhood! Rush for Fall 2021 starts
            on September 6th.
          </Bd1>
          <Link
            to={{ pathname: "/recruitment" }}
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.recruitButton}>
              Our Fall 2021 Timeline{" "}
              <ArrowRightAltIcon style={{ marginLeft: "6px" }} />
            </Button>
          </Link>
        </Box>
      </RushSEP>
      <BottomNav />
    </>
  );
}

export default React.memo(Home);
