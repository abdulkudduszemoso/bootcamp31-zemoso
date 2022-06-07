import * as React from "react";
import { Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "394px",
    height: "36px",
    gap: "38px",
    border: "1px solid #E9E8ED",
    boxSizing: "border-box",
    borderRadius: "12px",
    padding: "4px",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: "7px",
  },
  circle: {
    marginBottom: "5px",
  },
  icon: {
    color: "#6D6C73",
  },
});

const TestInfo: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <AttachMoneyIcon className={classes.icon} fontSize="small" />
        <Typography variant="body3" color="secondary.dark">
          Starting from $1200
        </Typography>
      </div>
      <div className={classes.circle}>
        <CircleIcon className={classes.icon} sx={{ fontSize: "6px" }} />
      </div>
      <div className={classes.item}>
        <AccessTimeIcon className={classes.icon} fontSize="small" />
        <Typography variant="body3" color="secondary.dark">
          Reports ready in 24 Hours
        </Typography>
      </div>
    </div>
  );
};

export default TestInfo;
