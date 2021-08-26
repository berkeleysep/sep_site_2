import React from "react";
import TopNav from "../components/TopNav";
import ExecutivePhoto from "../components/ExecutivePhoto";
import { Box, Button, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { Bd1, Hl3 } from "../shared/Typography";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MemberPhoto from "../components/MemberPhoto";

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


export default function Members() {
  const Header = styled(Box)`
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 76px;
    padding-bottom: 76px;
  `;

  const ExecutiveBoard = styled(Box)`
    display: flex;
    flex-direction: row;
    padding-top: 76px;
    background-color: #F4F5F7;
    padding-left: 10%;
    padding-right: 10%;
  `
  const ExecutivePhotos = styled(Box)`
    display: flex;
    flex-direction: row;
    padding-top: 76px;
    background-color: #F4F5F7;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 76px;
    margin: auto;
    align-items: center;
    justify-content: center;
  `

  const ActiveHouse = styled(Box)`
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 76px;
    padding-bottom: 76px;
  `;


  const classes = useStyles()

  return (
    <>
      <TopNav members/>
      <Header>
        <Box style={{ width: "100%", marginRight: "10%", display: "block" }}>
          <Box style={{ height: "200px", backgroundColor: "grey"}}>
            pic here
          </Box>
        </Box>
        <Box>
          <Hl3>Brotherhood</Hl3>
        </Box>
      </Header>

      <ExecutiveBoard>
        <Box style={{width: "35%", marginRight: "10%"}}>
          <Hl3 style={{marginBottom: "48px"}}>
            Executive Board
          </Hl3>
          <Bd1 style={{width: "90%", marginBottom: "40px"}}>
            They do something
          </Bd1>
        </Box>
        <Box style={{width: "55%"}}>
          <Box style={{ height: "100%", backgroundColor: "grey"}}>
            pic here
          </Box>
        </Box>
      </ExecutiveBoard>
      <ExecutivePhotos>
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
      </ExecutivePhotos>
      <ExecutivePhotos>
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
        <ExecutivePhoto
          major={"Computer Science"}
          description={"Lorem"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          position={"Pledgemaster"}
        />
      </ExecutivePhotos>
      <ActiveHouse>
        <Box style={{width: "35%", marginRight: "10%"}}>
          <Hl3 style={{marginBottom: "48px"}}>Active House</Hl3>
        </Box>
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
        <MemberPhoto
          major={"Computer Science"}
          email={"psonthalia@berkeley.edu"}
          linkedin={"https://google.com"}
          name={"Paran Sonthalia"}
          path={"../assets/paran.png"}
          pledge_class={"Upsilon"}
          cc={true}
        />
      </ActiveHouse>
    </>
  );
}
