import React, { useState } from "react";
import LabCards from "../../molecules/SelectLab";
import Image from "../../atoms/Image";
import { Grid, Typography } from "@mui/material";
import theme, { Colors } from "../../../theme/theme";
import Plus from "../../../../public/assets/images/plus.svg";
import IconWithText from "../../molecules/IconWithText";
import Sort from "../../../../public/assets/images/sort.svg";

const sxStyles = {
  mainGrid: {
    width: "583px",
    height: "560px",
    borderRadius: "8px",
    padding: "10px",
  },
  addItemButton: {
    marginLeft: `${theme.spacing(54)}`,
    marginBottom: "20px",
  },
  sortButton: {
    marginLeft: `${theme.spacing(47)}`,
    fontSize: "16px",
    width: "57.04px",
    height: "24px",
    backgroundColor: Colors.white,
    color: theme.palette.primary.main,
    textTransform: "none",
    boxShadow: "none",
    borderRadius: "8px",
  },
};

type SelectLabListProps = {
  callBack?: any;
  labList: any;
};

const SelectLabList = (props: SelectLabListProps) => {
    const [value, setValue] = useState(0);
    const pullData = (id: any) => {
      setValue(id);      
      
      props.callBack(id);
    };
    
  return (
    <Grid sx={sxStyles.mainGrid} container flexDirection="column">
      <Grid item sx={sxStyles.addItemButton} container flexDirection="row">
        <IconWithText buttonText={"Add Test"} startIcon={Plus} />
      </Grid>
      <Grid item flexDirection="row" container>
        <Grid item>
          <Typography variant="heading4" color={theme.palette.secondary.main}>
            Select Lab
          </Typography>
        </Grid>
        <Grid item sx={sxStyles.sortButton} container flexDirection="column">
          <Image src={Sort} alt="sort" />
          <Typography variant="subtitle2" color={theme.palette.secondary.main}>
            Sort
          </Typography>
        </Grid>
      </Grid>
      {props.labList.map((lab: any) => (
        <Grid item sx={{ marginTop: "20px" }} key={lab.labId}>
          <LabCards
            activeId={value}
            callback={pullData}
            labData={{
              id: lab.labId,
              labLogo: lab.labLogo,
              labName: lab.labName,
              rating: lab.labRating,
              slots: lab.slotsAvailable,
              reportsTime: "Reports ready in 24 hrs",
              cost: "$1200",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SelectLabList;
