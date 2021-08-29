import React from "react";
import styled from "styled-components";
import { Box, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
 
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import TimelineItem from "../components/TimelineItem";
import { Bd1, Hl2, Hl3, Hl5, Hl6 } from "../shared/Typography";

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
  width: 30%;
  padding: 76px 6% 76px 6%;
`;

const InfoRight = styled(Box)`
  width: 70%;
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

  return (
    <>
      <TopNav recruitment />
      <FrontSpread>
        <Hl2 style={{ marginBottom: "8px" }}>Rush Sigma Eta Pi</Hl2>
        <Bd1 style={{ marginBottom: "24px" }}>
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
          <Box style={{position: "-webkit-sticky",
  position: "sticky", top: "5%"}}>
          <Hl3 style={{ marginBottom: "34px" }}>Rush Timeline</Hl3>

          <VerticalTimeline layout={"1-column-left"}>
            <VerticalTimelineElement>
              <TimelineItem date={"Tues, Sept 7th"} time={"8PM"} location={"Location"} title={"Meet the Chapter #1"} description={"Description"}/>
            </VerticalTimelineElement>
            <VerticalTimelineElement>
              <Hl6>Tues, Sept 7th</Hl6>
            </VerticalTimelineElement>
          </VerticalTimeline>
          </Box>
        </InfoLeft>





        <InfoRight>
          <Hl3 style={{ marginBottom: "48px" }}>Rush Video</Hl3>
          <ResponsiveIFrame
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ResponsiveIFrame>
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
                  {" "}
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
