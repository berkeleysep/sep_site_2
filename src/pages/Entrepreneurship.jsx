import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { Bd1, Hl3 } from "../shared/Typography";
import FoundedCompanies from "../components/FoundedCompanies";

import entrepreneurship from "../entrepreneurship.json";

const Header = styled(Box)`
  padding: 76px 10% 76px 10%;
`;

const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const VentureProcess = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: #f4f5f7;
  padding: 76px 10% 64px 10%;
`;

const BeyondSEP = styled(Box)`
  padding: 76px 10% 64px 10%;
`;

const FoundedCompaniesContainer = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  margin-bottom: 48px;
`;

const CareerPhotoContainer = styled(Box)`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
`;

export default function Entrepreneurship() {
  return (
    <>
      <TopNav entrepreneurship />
      <Header>
        <Box
          style={{
            width: "100%",
            marginRight: "10%",
            display: "block",
            marginBottom: "48px",
          }}
        >
          <Box style={{ width: "100%", height: "200px", overflow: "hidden" }}>
            <img
              style={{ width: "100%", position: "relative", bottom: "200px" }}
              alt="professional-table"
              src={
                require("../assets/images/group/professional-table.JPG").default
              }
            />
          </Box>
        </Box>
        <TitleContainer>
          <Hl3 style={{ marginRight: "5%" }}>Entrepreneurship</Hl3>
          <Bd1>
            Here at SEP we focus on cultivating a community of passionate and
            fearless leaders. Through our pledging process, members become
            acquainted with the key principles of entrepreneurship and obtain
            highly transferable skills for success in nearly any domain.
          </Bd1>
        </TitleContainer>
      </Header>
      <VentureProcess>
        <Box style={{ width: "35%", marginRight: "10%" }}>
          <Hl3 style={{ marginBottom: "48px" }}>Our venture process</Hl3>
          <Bd1 style={{ width: "90%", marginBottom: "40px" }}>
            Our pledge education process is, in its own way, our own product.
            We’re constantly iterating on what equips new members with the tools
            needed to successfully dive into their own ventures.
          </Bd1>
          <Bd1 style={{ width: "90%", marginBottom: "40px" }}>
            While the specifics are left as a surprise to the new members,
            here’s an overview of the different phases of the venture-building
            aspect of pledging:
          </Bd1>
        </Box>
        <Box style={{ width: "55%" }}>
          <Box style={{ width: "100%", backgroundColor: "grey" }}>
            <img
              style={{ width: "100%", overflow: "none" }}
              alt="rohan-pitching"
              src={
                require("../assets/images/group/rohan-pitching.jpeg").default
              }
            />
          </Box>
        </Box>
      </VentureProcess>
      <BeyondSEP>
        <Hl3 style={{ marginBottom: "32px" }}>What we founded:</Hl3>
        <FoundedCompaniesContainer>
          {entrepreneurship.founded.map((company) => {
            return (
              <FoundedCompanies
                path={company.imgpath}
                name={company.name}
                description={company.description}
                urlsrc={company.url}
              />
            );
          })}
        </FoundedCompaniesContainer>
        <Hl3 style={{ marginBottom: "32px" }}>Where we go:</Hl3>
        <CareerPhotoContainer>
          {entrepreneurship.careers.map((name) => {
            return (
              <Box style={{ width: "140px", height: "140px", margin: "20px" }}>
                <img
                  alt={name}
                  src={
                    require("../assets/images/careers/" + name + ".png").default
                  }
                  style={{ maxHeight: "140px" }}
                />
              </Box>
            );
          })}
        </CareerPhotoContainer>
      </BeyondSEP>
      <BottomNav />
    </>
  );
}
