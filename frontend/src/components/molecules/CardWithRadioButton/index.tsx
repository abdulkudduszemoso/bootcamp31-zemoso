import { ButtonBase, Grid, Radio, Typography } from "@mui/material";
import React from "react";
import theme, {Colors} from "../../../theme/theme";

interface ICardWithRadioButtonProps {
  activeId?: any;
  callback?: any;
  cardData: {
    id: number;
    addressNumber?: string;
    addressType?: string;
    houseNo?: string,
    area?: string,
    zipCode?: string,
    city?: string,
    state?: string
  };
}

const CardWithRadioButton = ({
  activeId,
  callback,
  cardData,
}: ICardWithRadioButtonProps) => {
  const handleClick = () => {
    localStorage.setItem("addressDetails", JSON.stringify(cardData));
    callback(cardData.id);
  };
  return (
    <ButtonBase onClick={handleClick}>
      <Grid
        display="flex"
        borderRadius="0.5rem"
        boxSizing="border-box"
        padding={`${theme.spacing(1.5)} `}
        boxShadow="0rem 0rem 1.625rem rgba(233, 232, 237, 0.5)"
        style={{ width: "33.4375rem", minHeight: "8rem", marginBottom: '0.75rem' }}
        justifyContent="space-between"
      >
        <Grid
          item
          container
          flexDirection="column"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="body6"
              fontWeight="500"
              color={Colors.medium_emphasis}
            >
              {cardData.addressNumber}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              fontWeight="500"
              color={Colors.high_emphasis}
            >
              {cardData.addressType}
            </Typography>
          </Grid>
          <Grid item sx={{width: '16.125rem', textAlign: 'left'}} >
            <Typography
              variant="caption"
              fontWeight="400"
              color={Colors.medium_emphasis}
            >
              {cardData.houseNo}, {cardData.area}, {cardData.state}, {cardData.zipCode}
            </Typography>
          </Grid>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <Radio checked={cardData.id === activeId ? true : false} />
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

export default CardWithRadioButton;
