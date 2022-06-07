import { ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";
import theme, { Colors } from "../../../theme/theme";
import Image from "../../atoms/Image";
import Selected from "../../../../public/assets/images/selected.svg";
import ImageTypography from "../ImageTypography";
import Star from "../../../../public/assets/images/star.svg";
import Calendar from "../../../../public/assets/images/calendar.svg";
import Altos from "../../../../public/assets/images/altos.svg";


export interface LabCardProps {
  activeId?: any;
  callback?: any;
  labData: {
    id?: any;
    labLogo?: string;
    labName?: string;
    rating?: number;
    slots?: number;
    reportsTime?: string;
    cost?: string;
  };
}

const LabCards = ({ activeId, callback, labData }: LabCardProps) => {
  const handleClick = () => {
    callback(labData.id);
  };
  return (
    <ButtonBase id={labData.id} onClick={handleClick}>
      <Grid
        style={{
          width: "535px",
          height: "144px",
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: `${theme.spacing(1.5)}`,
          display: "flex",
          justifyContent: "space-between",
        }}
        border={
          labData.id === activeId
            ? "2px solid #9E62B3"
            : `1px solid ${theme.palette.grey["100"]}`
        }
      >
        <Grid item container display="flex" flexDirection="row">
          <Grid
            item
            marginRight={theme.spacing(2.07)}
            marginLeft={theme.spacing(0.5)}
            marginTop={theme.spacing(1.16)}
          >
            <img src={Altos} />
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid item>
              <Typography
                variant="button"
                textTransform="none"
                color={Colors.medium_emphasis}
              >
                {labData.labName}
              </Typography>
            </Grid>
            <Grid item container display="flex" alignItems="center">
              <Grid item paddingRight={theme.spacing(3.01)}>
                <ImageTypography
                  src={Star}
                  title={labData.rating + ""}
                  variant="star"
                />
              </Grid>
              <Grid item>
                <ImageTypography
                  src={Calendar}
                  title={labData.slots + " Slots Avaliable"}
                  variant="calendar"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                fontWeight="400"
                color={Colors.medium_emphasis}
              >
                {labData.reportsTime}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                fontWeight="500"
                color={theme.palette.textColors?.highEmphasis}
              >
                {`${labData.cost} for 1 test`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Image src={labData.id === activeId ? Selected : ""}></Image>
          </Grid>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

export default LabCards;
