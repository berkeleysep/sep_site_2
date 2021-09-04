import React, {useState, useEffect} from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import AnimationPhoto from "../components/AnimationPhoto";
import { Hl2, Bd1, Hl3, Hl4, Bd2 } from "../shared/Typography";
import actives from "../actives.json";
import MobileNav from "../components/MobileNav";

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
  recruitmentButton: {
    textTransform: "none",
    textDecoration: (props) => (props.recruitment ? "underline" : "none"),
    textUnderlineOffset: "4px",
    backgroundColor: "#8C30F5",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "20px",
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

const FrontSpread = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  min-height: 80vh;
  margin-bottom: 50px;
  position: relative;
`;

const FrontTitle = styled(Box)`
  z-index: 100;
  width: 60%;
  @media (max-width: 767px) {
    width: auto;
  }
`

const WhoWeAre = styled(Box)`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 76px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const WhoWeAreLeft = styled(Box)`
  width: 40%;
  margin-right: 10%;
  @media (max-width: 767px) {
    width: auto;
    margin-right: 0;
  }
`;
const WhoWeAreRight = styled(Box)`
  width: 50%;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const WhatWeDo = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: #f4f5f7;
  padding: 76px 10% 76px 10%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const WhatWeDoLeft = styled(Box)`
  width: 55%;
  margin-right: 5%;
  @media (max-width: 767px) {
    width: auto;
    margin-right: 0;
  }
`;
const WhatWeDoRight = styled(Box)`
  width: 40%;
  @media (max-width: 767px) {
    width: auto;
  }
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
  @media (max-width: 767px) {
    flex-direction: column;
  }
  // background-color: #f4f5f7;
`;
const RushSEPLeft = styled(Box)`
  width: 30%;
  margin-right: 10%;
  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;
const RushSEPRight = styled(Box)`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;


const NavBarItem = styled(Link)`
  text-decoration: none;
  color: black;
  height: 40px;
`;

function Home() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 700
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <>
    { mobileView ? 
      <MobileNav /> :
      <TopNav home />
    }
      <FrontSpread className="frontSpread">
        <FrontTitle>
          <Hl2 style={{ marginBottom: "16px" }}>
            UC Berkeley's Premier Entrepreneurship Fraternity
          </Hl2>
          <Bd1>Here at Sigma Eta Pi, we are building the future...</Bd1>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <Button className={classes.recruitmentButton}>
              Rush Fall 2021
            </Button>
          </NavBarItem>
        </FrontTitle>
        <Box style={{ maxWidth: "60%"}}>
        {actives.images.map((path, index) => {
          const min = 3000;
          const max = 4000;
          const expiration = Math.floor(Math.random() * max) + min;
          const stagger = index * 700;

          return (
            <AnimationPhoto
              path={path}
              delay={expiration}
              stagger={stagger}
              mobile={mobileView}
            />
          );
        })}
        </Box>
      </FrontSpread>
      <WhoWeAre>
        <WhoWeAreLeft>
          <Box style={{ width: "100%", overflow: "hidden" }}>
            <img
              style={{ width: "100%" }}
              alt="camping-trip-1"
              src={require("../assets/images/group/camping-trip-1.JPG").default}
            />
          </Box>
        </WhoWeAreLeft>
        <WhoWeAreRight>
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
            <Stats number="30+" descriptor="Majors" />
            <Stats number="42+" descriptor="Actives" />
            <Stats number="14+" descriptor="Countries" />
            <Stats number="30+" descriptor="Ventures" />
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
        </WhoWeAreRight>
      </WhoWeAre>
      <WhatWeDo>
        <WhatWeDoLeft>
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
        </WhatWeDoLeft>
        <WhatWeDoRight>
          <Box
            style={{
              height: "100%",
              overflow: "hidden",
              border: "1px solid black",
            }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              alt="sep-logo"
              src={require("../assets/SEP-logo-dark.png").default}
            />
          </Box>
        </WhatWeDoRight>
      </WhatWeDo>
      {/* <OurBlog>
        <Hl3 style={{ marginBottom: "48px" }}>Our blog</Hl3>
      </OurBlog> */}
      <RushSEP>
        <RushSEPLeft>
          <Box style={{ height: "100%", overflow: "hidden" }}>
            <img
              style={{ width: "100%" }}
              alt="tim-joelene"
              src={require("../assets/images/group/tim-joelene.png").default}
            />
          </Box>
        </RushSEPLeft>
        <RushSEPRight>
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
        </RushSEPRight>
      </RushSEP>
      <BottomNav />
    </>
  );
}

export default React.memo(Home);
