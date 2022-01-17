import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import SEPLogo from "../assets/SEP-logo-light.svg";
import { Bd1, Hl6 } from "../shared/Typography";

const FooterSpread = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: black;
  padding: 64px 10% 64px 10%;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    padding: 38px 0 38px 3%;
  }
`;

const NavBarItem = styled(Link)`
  text-decoration: none;
  color: white;
  height: 40px;
  margin-bottom: 10px;
`;

const BoxLeft = styled(Box)`
  width: 30%;
  padding-right: 15%;
  @media (max-width: 768px) {
    padding: 16px 0 38px 3%;
  }
`;

const BoxRight = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 55%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 16px 3%;
  }
`;

const SubSection = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;

const MobileBox = styled(Box)`
  @media (max-width: 768px) {
    width: auto;
    margin-left: 20px;
  }
`;

export default function BottomNav() {
  return (
    <FooterSpread>
      <BoxLeft>
        <NavBarItem
          to={{
            pathname: "/",
          }}
        >
          <Box style={{ height: "36px" }}>
            <img style={{ height: "36px" }} src={SEPLogo} alt="SEP Logo" />
          </Box>
        </NavBarItem>
      </BoxLeft>
      <BoxRight>
        <SubSection>
          <NavBarItem
            to={{
              pathname: "/members",
            }}
          >
            <Hl6 style={{ width: "125px" }}>Members</Hl6>
          </NavBarItem>
        </SubSection>
        <SubSection>
          <NavBarItem
            to={{
              pathname: "/entrepreneurship",
            }}
          >
            <Hl6>Entrepreneurship</Hl6>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/entrepreneurship",
            }}
          >
            <MobileBox>
              <Bd1>Ventures</Bd1>
            </MobileBox>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/entrepreneurship",
            }}
          >
            <MobileBox>
              <Bd1>Careers</Bd1>
            </MobileBox>
          </NavBarItem>
        </SubSection>
        <SubSection>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <Hl6>Recruitment</Hl6>
          </NavBarItem>
          <NavBarItem
            to={{
              pathname: "/recruitment",
            }}
          >
            <MobileBox>
              <Bd1>Apply</Bd1>
            </MobileBox>
          </NavBarItem>
        </SubSection>
      </BoxRight>
    </FooterSpread>
  );
}
