import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import ExecutivePhoto from "../components/ExecutivePhoto";
import MemberPhoto from "../components/MemberPhoto";
import { Bd1, Hl3 } from "../shared/Typography";
import actives from "../actives.json";

export default function Members() {
  const Header = styled(Box)`
    padding: 76px 10% 76px 10%;
  `;

  const ExecutiveBoard = styled(Box)`
    display: flex;
    flex-direction: row;
    padding-top: 76px;
    background-color: #f4f5f7;
    padding-left: 10%;
    padding-right: 10%;
  `;
  const ExecutivePhotos = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: #f4f5f7;
    padding: 76px 10% 76px 10%;
    margin: auto;
    align-items: center;
    justify-content: center;
  `;

  const ActiveHouse = styled(Box)`
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 76px;
    padding-bottom: 76px;
  `;

  return (
    <>
      <TopNav members />
      <Header>
        <Box style={{ width: "100%", marginRight: "10%", display: "block" }}>
          <Box style={{ height: "200px", backgroundColor: "grey" }}>
            pic here
          </Box>
        </Box>
        <Box>
          <Hl3>Brotherhood</Hl3>
        </Box>
      </Header>

      <ExecutiveBoard>
        <Box style={{ width: "35%", marginRight: "10%" }}>
          <Hl3 style={{ marginBottom: "48px" }}>Executive Board</Hl3>
          <Bd1 style={{ width: "90%", marginBottom: "40px" }}>
            They do something
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
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/images/individual/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
      </ActiveHouse>
      <BottomNav />
    </>
  );
}
