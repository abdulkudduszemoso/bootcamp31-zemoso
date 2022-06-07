import { CardContent, Card, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PdfIcon from "../../../../public/assets/icons/pdfpending.svg";
import PrimaryPDFIcon from "../../../../public/assets/icons/PDF.svg";
import DownloadIcon from "../../../../public/assets/icons/download.svg";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Image from "../../atoms/Image";

const useStyles = makeStyles({
  root: {
    width: "583px",
    boxShadow: " 0px 0px 12px rgba(233, 232, 237, 0.53)",
  },
  content: {
    display: "flex",
  },
  image: {
    marginLeft: "330px",
  },
});

interface ReportCardProps {
  labName: string;
  testName: string;
  variant: "upcoming" | "recent";
  date?: string;
  time?: string;
}
const ReportCard = (props: ReportCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        {props.variant === "upcoming" && <Image src={PdfIcon} />}
        {props.variant === "recent" && <Image src={PrimaryPDFIcon} />}
        <Stack spacing={0.5} sx={{ paddingLeft: "28px" }}>
          <Typography variant="heading5" color="secondary.dark">
            {props.labName}
          </Typography>
          <Typography variant="body5" color="secondary.dark">
            {props.testName}
          </Typography>
          {props.variant === "upcoming" && (
            <Stack direction="row" spacing={0.5}>
              <AccessTimeOutlinedIcon
                sx={{
                  color: "red",
                  width: "16px",
                  height: "16px",
                }}
              />
              <Typography variant="body3" color="red">
                Pending
              </Typography>
            </Stack>
          )}
          {props.variant === "recent" && (
            <Typography variant="body3" color="secondary.light">
              {`${props.date} | ${props.time}`}
            </Typography>
          )}
        </Stack>
        {props.variant === "recent" && (
          <img className={classes.image} src={DownloadIcon} />
        )}
      </CardContent>
    </Card>
  );
};
export default ReportCard;
