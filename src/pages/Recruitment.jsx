import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Box, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import BottomNav from "../components/BottomNav";
import MobileNav from "../components/MobileNav";
import TopNav from "../components/TopNav";
import TimelineItem from "../components/TimelineItem";
import { Bd1, Hl2, Hl3, Hl5 } from "../shared/Typography";

import Handshake from "../assets/images/emojis/handshake.svg";
import World from "../assets/images/emojis/world.svg";
import Celebrate from "../assets/images/emojis/celebrate.svg";
import Essay from "../assets/images/emojis/essay.svg";
import Mic from "../assets/images/emojis/mic.svg";
import Bag from "../assets/images/emojis/bag.svg";
import F1Car from "../assets/images/emojis/f1car.svg";
import Pinning from "../assets/images/emojis/pinning.svg";

const heroimg = require("../assets/images/group/sigmas-sf.jpg").default;
const useStyles = makeStyles({
  backgroundImage: {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${heroimg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
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
      textUnderlineOffset: "4px",
    },
  },
  customTimeline: {
    "&:before": {
      padding: "0px",
    },
  },
});

const FrontSpread = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  background-color: #969bab;
  color: white;
  padding-left: 10%;
`;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const InfoLeft = styled(Box)`
  background-color: #f4f5f7;
  width: 35%;
  padding: 76px 3% 76px 6%;
`;

const InfoRight = styled(Box)`
  width: 65%;
  padding: 76px 5% 76px 5%;
`;

const NavBarItem = styled(Link)`
  text-decoration: none;
  color: black;
  height: 40px;
`;

const ResponsiveIFrame = styled(Box)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0;
  margin-bottom: 48px;
`;

const FAQItem = styled(Box)`
  margin-bottom: 48px;
  width: 90%;
`;

const FAQTitle = styled(Hl5)`
  margin-bottom: 24px;
`;

export default function Recruitment() {
  const classes = useStyles();

  function redirectTypeform() {
    window.open(
      "https://mkg2mvddy6x.typeform.com/to/T0epVEaT?typeform-source=l.messenger.com",
      "_blank"
    );
  };

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
      <TopNav recruitment />
    }
      <FrontSpread className={classes.backgroundImage}>
        <Hl2 style={{ marginBottom: "8px" }}>Rush Sigma Eta Pi</Hl2>
        <Bd1 style={{ marginBottom: "24px" }}>
          Be a part of UC Berkeley's Premier Entrepreneurship Fraternity
        </Bd1>
        <NavBarItem
          to={{
            pathname: "/recruitment",
          }}
        >
          <Button
            onClick={() => redirectTypeform()}
            className={classes.applyButton}
          >
            Apply Now
          </Button>
        </NavBarItem>
      </FrontSpread>
      <InfoBox>
        <InfoLeft>
          <Box
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              top: "5%",
            }}
          >
            <Hl3 style={{ marginBottom: "34px" }}>Rush Timeline</Hl3>

            <VerticalTimeline layout={"1-column-left"}>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="Handshake emoji"
                    style={{ width: "100%" }}
                    src={Handshake}
                  />
                }
              >
                <TimelineItem
                  date={"Tues, Sept 7th"}
                  time={"8PM"}
                  location={"VLSB 2050"}
                  title={"Meet the Chapter #1"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="World emoji"
                    style={{ width: "100%" }}
                    src={World}
                  />
                }
              >
                <TimelineItem
                  date={"Wed, Sept 8th"}
                  time={"8PM"}
                  location={"VLSB 2030"}
                  title={"Diversity in SEP"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="Celebrate emoji"
                    style={{ width: "100%" }}
                    src={Celebrate}
                  />
                }
              >
                <TimelineItem
                  date={"Thu, Sept 9th"}
                  time={"7PM"}
                  location={"Hearst Field Annex A1"}
                  title={"Social Night"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="Essay emoji"
                    style={{ width: "100%" }}
                    src={Essay}
                  />
                }
              >
                <TimelineItem
                  date={"Fri, Sept 10th"}
                  time={"11:59PM"}
                  location={"TBD"}
                  title={"Applications Due"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img alt="Mic emoji" style={{ width: "100%" }} src={Mic} />
                }
              >
                <TimelineItem
                  date={"Sat, Sept 11th"}
                  time={"TBD*"}
                  location={"TBD*"}
                  title={"1st Round Interviews"}
                  description={"*Invite only"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img alt="Bag emoji" style={{ width: "100%" }} src={Bag} />
                }
              >
                <TimelineItem
                  date={"Wed, Sept 15th"}
                  time={"TBD*"}
                  location={"TBD*"}
                  title={"2nd Round Interviews"}
                  description={"*Invite only"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="F1Car emoji"
                    style={{ width: "100%" }}
                    src={F1Car}
                  />
                }
              >
                <TimelineItem
                  date={"Thu, Sept 16th"}
                  time={"TBD*"}
                  location={"TBD*"}
                  title={"Speed Dating Round"}
                  description={"*Invite only"}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={
                  <img
                    alt="Pinning emoji"
                    style={{ width: "100%" }}
                    src={Pinning}
                  />
                }
              >
                <TimelineItem
                  date={"Fri, Sept 17th"}
                  time={"TBD*"}
                  location={"TBD*"}
                  title={"Bid Night"}
                  description={"*Invite only"}
                />
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Box>
        </InfoLeft>

        <InfoRight>
          <Hl3 style={{ marginBottom: "48px" }}>Rush Video</Hl3>
          {/* <ResponsiveIFrame
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: "25",
              height: "0",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/rokGy0huYEA"
              title="SEP Rush Video Fall 2021"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ResponsiveIFrame> */}
          <Bd1 style={{ marginBottom: "32px"}}>
          Coming soon!
          </Bd1>
          <Hl3 style={{ marginBottom: "48px" }}>Frequently Asked Questions</Hl3>
          <FAQItem>
            <FAQTitle>What is the pledging process?</FAQTitle>
            <Bd1>
              Our pledging process is a semester long and is centered around
              professional and entrepreneurial development, personal growth, and
              family. While pledging, you will apply what you learn through the
              ventures you choose to pursue. We provide our pledges with a
              strong curriculum and professional development backbone as well as
              opportunities for them to get to know their pledge class and the
              active house on a personal level.
            </Bd1>
          </FAQItem>
          <FAQItem>
            <FAQTitle>
              What kind of people make up your current community?
            </FAQTitle>
            <Bd1>
              About 50% of our members are technical majors (Computer Science,
              Cognitive Science, Chemical Engineering, etc.), while 50% are
              non-technical majors (Business, Rhetoric, Political Science,
              Pyschology, etc.).
            </Bd1>
          </FAQItem>
          <FAQItem>
            <FAQTitle>What does SEP look for in applicants?</FAQTitle>
            <Bd1>We are looking for people who are:</Bd1>
            <ul>
              <li>
                <Bd1>passionate about their interests</Bd1>
              </li>
              <li>
                <Bd1>
                  ready to jump into a semester of exploring entrepreneurship
                  hands-on
                </Bd1>
              </li>
              <li>
                <Bd1>
                  willing to challenge both the status quo and themselves
                </Bd1>
              </li>
            </ul>
            <Bd1>We are NOT looking for:</Bd1>
            <ul>
              <li>
                <Bd1>only people from a specific background/major</Bd1>
              </li>
              <li>
                <Bd1>
                  only people specifically with a lot of entrepreneurship
                  experience in the past (although you are also more than
                  welcome!)
                </Bd1>
              </li>
            </ul>
            <Bd1>
              Your life experiences are enough to equip you to solve unique
              problems that exist in the world today. Diversity strengthens
              entrepreneurship and community.
            </Bd1>
          </FAQItem>
        </InfoRight>
      </InfoBox>
      <BottomNav />
    </>
  );
}
