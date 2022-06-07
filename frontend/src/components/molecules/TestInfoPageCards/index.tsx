import React from 'react';

import TypographyComponent from "../../atoms/Typography";


import img1 from "../../../../public/assets/images/TestInfoPage/1.svg";
import img2 from "../../../../public/assets/images/TestInfoPage/2.svg";
import img3 from "../../../../public/assets/images/TestInfoPage/3.svg";
import img4 from "../../../../public/assets/images/TestInfoPage/4.svg";


import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "../../atoms/Image";



const styles = {

    flex: {
      display: "flex",
      flexDirection: "column",
    },
    marginForText: {
      marginLeft: "6px",
      marginTop: "4px",
    },
  };
  
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
  });
const TestInfoPageCards = ()=>{
    const classes = useStyles();
    return(
        
        <Grid item container>
        <Grid item container xs={3}>
          <Grid item>
            <Image src={img1} height={44} width={44} />
          </Grid>
          <Grid item>
            <div className={classes.root} style={styles.marginForText}>
              <TypographyComponent variant="body6" text="Home " />
              <TypographyComponent variant="body6" text=" visit" />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={3}>
          <Grid item>
            <Image src={img2} height={44} width={44} />
          </Grid>
          <Grid item style={styles.marginForText}>
            <div className={classes.root}>
              <TypographyComponent variant="body6" text="1 test  " />
              <TypographyComponent variant="body6" text="included" />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={3}>
          <Grid item>
            <Image src={img3} height={44} width={44} />
          </Grid>
          <Grid item style={styles.marginForText}>
            <div className={classes.root}>
              <TypographyComponent variant="body6" text="Free" />
              <TypographyComponent variant="body6" text="consultation" />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={3}>
          <Grid item>
            <Image src={img4} height={44} width={44} />
          </Grid>
          <Grid item style={styles.marginForText}>
            <div className={classes.root}>
              <TypographyComponent variant="body6" text="Online" />
              <TypographyComponent variant="body6" text="reports" />
            </div>
          </Grid>
        </Grid>
      </Grid>
        
    )
}

export default TestInfoPageCards;