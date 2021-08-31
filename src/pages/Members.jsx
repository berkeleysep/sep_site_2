import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import ExecutivePhoto from "../components/ExecutivePhoto";
import MemberPhoto from "../components/MemberPhoto";
import { Bd1, Bd2, Hl3, Hl5 } from "../shared/Typography";
import actives from "../actives.json";

export default function Members() {
  const Header = styled(Box)`
    padding: 76px 10% 76px 10%;
  `;

  const BrotherHoodBoxContainer = styled(Box)`
    display: flex;
    flex-flow: row wrap;
  `

  const BrotherHoodBox = styled(Box)`
    width: 250px;
    margin-right: 30px;
  `

  const ExecutiveBoard = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: #f4f5f7;
    padding: 76px 10% 0px 10%;
  `;

  const ExecutivePhotos = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    background-color: #f4f5f7;
    padding: 76px 10% 38px 10%;
    align-items: start;
  `;

  const ActiveHouse = styled(Box)`
    padding: 76px 10% 76px 10%;
  `;

  const ActivePhotos = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    align-items: start;
  `;

  return (
    <>
      <TopNav members />
      <Header>
        <Box
          style={{
            width: "100%",
            marginRight: "10%",
            display: "block",
            marginBottom: "48px",
          }}
        >
          <Box style={{ height: "200px", backgroundColor: "grey" }}>
            pic here
          </Box>
        </Box>
        <Box>
          <Hl3 style={{marginBottom: "48px"}}>Brotherhood</Hl3>
          <BrotherHoodBoxContainer>
            <BrotherHoodBox>
              <Hl5 style={{marginBottom: "8px"}}>
                Executive Board
              </Hl5>
              <Bd2 style={{marginBottom: "16px"}}>
                Byline
              </Bd2>
              <Box style={{ height: "210px", backgroundColor: "grey"}}>
                pic here
              </Box>
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{marginBottom: "8px"}}>
                Active House
              </Hl5>
              <Bd2 style={{marginBottom: "16px"}}>
                Byline
              </Bd2>
              <Box style={{ height: "210px", backgroundColor: "grey"}}>
                pic here
              </Box>
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{marginBottom: "8px"}}>
                Big + Littles
              </Hl5>
              <Bd2 style={{marginBottom: "16px"}}>
                Byline
              </Bd2>
              <Box style={{ height: "210px", overflow: "hidden" }}>
                <img style= {{ width: "100%"}} alt="glade-1" src={require("../assets/images/group/glade-1.png").default}/>
              </Box>
            </BrotherHoodBox>
            <BrotherHoodBox>
              <Hl5 style={{marginBottom: "8px"}}>
                Pledge Class
              </Hl5>
              <Bd2 style={{marginBottom: "16px"}}>
                Byline
              </Bd2>
              <Box style={{ height: "210px", backgroundColor: "grey"}}>
                pic here
              </Box>
            </BrotherHoodBox>
          </BrotherHoodBoxContainer>
        </Box>
      </Header>

      <ExecutiveBoard>
        <Box style={{ width: "35%", marginRight: "10%" }}>
          <Hl3 style={{ marginBottom: "48px" }}>Executive Board</Hl3>
          <Bd1 style={{ width: "90%", marginBottom: "40px" }}>
            Our executive board is responsible for envisioning and executing the
            mission of our fraternity.
          </Bd1>
        </Box>
        <Box style={{ width: "55%" }}>
          <Box style={{ height: "100%", backgroundColor: "grey" }}>
            pic here
          </Box>
        </Box>
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
