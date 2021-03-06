import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import TopNav from "../components/TopNav";
import MobileNav from "../components/MobileNav";
import BottomNav from "../components/BottomNav";
import ExecutivePhoto from "../components/ExecutivePhoto";
import MemberPhoto from "../components/MemberPhoto";
import { Bd1, Bd2, Hl3, Hl5 } from "../shared/Typography";
import actives from "../actives.json";

const Header = styled(Box)`
  padding: 76px 10% 38px 10%;
`;

const BrotherHoodBoxContainer = styled(Box)`
  display: flex;
  flex-flow: row wrap;
`;

const BrotherHoodBox = styled(Box)`
  width: 250px;
  margin-right: 30px;
  margin-bottom: 32px;
`;

const ExecutiveBoard = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  padding: 76px 10% 0px 10%;
`;

const ExecutivePhotos = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  background-color: #f4f5f7;
  padding: 76px 10% 38px 10%;
  align-items: start;
  justify-content: center;
`;

const ActiveHouse = styled(Box)`
  padding: 76px 10% 76px 10%;
`;

const ActivePhotos = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  justify-content: center;
`;

export default function Members() {
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
    };
  }, []);

  return (
    <>
      {mobileView ? <MobileNav /> : <TopNav members />}
      <Header>
        <Box
          style={{
            width: "100%",
            marginRight: "10%",
            display: "block",
            marginBottom: "48px",
          }}
        >
          <Box style={{ height: "400px", overflow: "hidden" }}>
            <img
              style={{ width: "100%" }}
              alt="camping-trip-1"
              src={require("../assets/images/group/camping-trip-1.jpg").default}
            />
          </Box>
        </Box>
        <Box>
          <Hl3 style={{ marginBottom: "48px" }}>Brotherhood</Hl3>
          <BrotherHoodBoxContainer>
            <BrotherHoodBox>
              <Hl5 style={{ marginBottom: "8px" }}>Executive Board</Hl5>
              <Bd2 style={{ marginBottom: "16px" }}>Our Foundation</Bd2>
              <Box
                style={{
                  height: "210px",
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
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{ marginBottom: "8px" }}>Active House</Hl5>
              <Bd2 style={{ marginBottom: "16px" }}>A supportive community</Bd2>
              <Box style={{ height: "210px", overflow: "hidden" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  alt="griffiths"
                  src={require("../assets/images/group/griffiths.jpg").default}
                />
              </Box>
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{ marginBottom: "8px" }}>Big + Littles</Hl5>
              <Bd2 style={{ marginBottom: "16px" }}>Family and mentorship</Bd2>
              <Box style={{ height: "210px", overflow: "hidden" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  alt="glade-1"
                  src={require("../assets/images/group/glade-1.png").default}
                />
              </Box>
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{ marginBottom: "8px" }}>Pledge Class</Hl5>
              <Bd2 style={{ marginBottom: "16px" }}>
                Your future co-founders
              </Bd2>
              <Box style={{ height: "210px", overflow: "hidden" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  alt="oopsilons"
                  src={require("../assets/images/group/oopsilons.jpg").default}
                />
              </Box>
            </BrotherHoodBox>
          </BrotherHoodBoxContainer>
        </Box>
      </Header>

      <ExecutiveBoard>
        <Hl3 style={{ marginBottom: "12px" }}>Executive Board</Hl3>
        <Bd1>
          Our executive board is responsible for envisioning and executing the
          mission of our fraternity.
        </Bd1>
      </ExecutiveBoard>
      <ExecutivePhotos>
        {actives.executives.map((executive) => {
          return (
            <ExecutivePhoto
              path={executive.imgpath}
              name={executive.name}
              position={executive.position}
              pledge_class={executive.pledge_class}
              major={executive.major}
              bio={executive.bio}
              linkedin={executive.linkedin}
            />
          );
        })}
      </ExecutivePhotos>
      <ActiveHouse>
        <Box style={{ width: "35%", marginRight: "10%" }}>
          <Hl3 style={{ marginBottom: "48px" }}>Active House</Hl3>
        </Box>
        <ActivePhotos>
          {actives.actives.map((active) => {
            return (
              <MemberPhoto
                path={active.imgpath}
                name={active.name}
                pledge_class={active.pledge_class}
                major={active.major}
                linkedin={active.linkedin}
                cc={active.cc}
              />
            );
          })}
        </ActivePhotos>
      </ActiveHouse>
      <BottomNav />
    </>
  );
}
