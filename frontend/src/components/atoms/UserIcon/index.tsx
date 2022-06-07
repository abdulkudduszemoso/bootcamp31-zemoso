import React from "react";
import { Avatar, AvatarProps } from "@mui/material";
import { styled } from "@mui/styles";
import theme from "../../../theme/theme";

interface IAvatarProps extends AvatarProps {
  variant: "circular" | "rounded" | "square";
  src?: any;
}

const StyledAvatar = styled(Avatar)({
  "&.MuiAvatar-rounded": {
    width: "50px",
    height: "50px",
    backgroundColor: theme.palette.primary.light,
    "& .MuiAvatar-img": {
      sizes: ";width:40px;height:40px",
    },
  },
  "&.MuiAvatar-circular": {
    width: "56px",
    height: "56px",
    backgroundColor: '#F9F5FA',
    "& .MuiAvatar-img": {
      sizes: ";width:40px;height:40px",
    },
  },
  "&.MuiAvatar-square": {
    width: "144px",
    height: "165px",
  },
});

const UserIcon = (props: IAvatarProps) => {
  return (
    <>
      <StyledAvatar {...props} variant={props.variant} src={props.src} data-testid="avatar-test"/>
    </>
  );
};

export default UserIcon;
