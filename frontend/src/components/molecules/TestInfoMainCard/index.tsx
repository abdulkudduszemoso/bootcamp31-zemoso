import { Grid } from "@mui/material"
import React from "react"
import TypographyComponent from "../../atoms/Typography";
import BulletPoints from "../BulletPoints/index";
import PrimaryList from "../PrimaryList";
import TestInfo from "../TestInfo";
import TestInfoPageCards from "../TestInfoPageCards";


import {TestInfoMainCardConst} from "../../../utils/constants";

const styles = {
    header: {
      marginTop: "24px",
      marginLeft: "90px",
    },
    backbutton: {
      marginTop: "30px",
      marginLeft: "90px",
    },
    stepper: {
      marginLeft: "401px",
      marginTop: "27px",
    },
    mainbox: {
      marginTop: "32px",
      height: "590px",
      width: "613px",
      boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
    },
    innerBox: {
      marginTop: "24px",
      marginLeft: "11px",
      marginRight: "11px",
      height: "456px",
      width: "561px",
    },
    heading: {
      marginBottom: "36px",
    },
    testInfo: {
      marginTop: "30px",
      marginBottom: "33px",
    },
    points: {
      marginLeft: "-20px",
      marginBottom: "24px",
    },
    list: {
      marginTop: "10px",
    },
    footer: {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
    },
    textalign: {
      textAlign: "center",
    },
    flex: {
      display: "flex",
      flexDirection: "column",
    },
    marginForText: {
      marginLeft: "6px",
      marginTop: "4px",
    },
  };

const TestInfoMainCard = ()=>{
    return(
        <>
         <Grid item container style={styles.mainbox}>
      <Grid item style={styles.innerBox}>
        <Grid item xs={12} style={styles.heading}>
          <TypographyComponent text={TestInfoMainCardConst.const1} variant="heading4" />
        </Grid>

        <TestInfoPageCards />

        <Grid item xs={12} style={styles.testInfo}>
          <TestInfo />
        </Grid>

        <Grid item xs={12} style={styles.points}>
          <BulletPoints />
        </Grid>

        <Grid item xs={12}>
          <TypographyComponent
            text={TestInfoMainCardConst.const2}
            variant="heading5"
          />
        </Grid>

        <Grid item style={styles.list}>
          <PrimaryList
            text={TestInfoMainCardConst.const3}
          />
        </Grid>
      </Grid>
    </Grid>
        </>
    )
}

export default TestInfoMainCard;