import React from "react";
import Header from "../../components/organisms/Header";
import ReportCard from "../../components/molecules/ReportCard";
import TypographyComponent from "../../components/atoms/Typography";
import { Grid } from "@mui/material";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { getAllReports } from "./hook";

const styles = {
  header: {
    marginBottom: "0px",
  },
  outerbox: {
    width: "583px",
    height: "652px",
    marginLeft: "90px",
  },
  head1: {
    marginTop: "40px",
    marginBottom: "40px",
  },
  head2: {
    marginBottom: "32px",
  },
  box1: {
    marginBottom: "60px",
  },
  head3: {
    marginTop: "0px",
    marginBottom: "10px",
  },
  compReports: {
    marginTop: "24px",
    marginBottom: "24px",
  },
};
type myType = "upcoming" | "recent";
const myString: string = "recent";
const recent: myType = myString as myType;

const list = [
  {
    labName: "Los Altos Center Lab",
    testName: "COVID RT-PCR Test",
    variant: recent,
    date: "02 Feb 2022",
    time: "08.30 AM",
  },
  {
    labName: "Los Altos Center Lab",
    testName: "COVID RT-PCR Test",
    variant: recent,
    date: "02 Feb 2022",
    time: "08.30 AM",
  },
  {
    labName: "Los Altos Center Lab",
    testName: "COVID RT-PCR Test",
    variant: recent,
    date: "02 Feb 2022",
    time: "08.30 AM",
  },
];

export interface ReportDetails {
    labName?: string,
    testName?: string,
    reportStatus?: string,
    reportDownload?: string,
    reportTime?: string
}

const Body: React.FC = () => {
  const reports: ReportDetails[] = getAllReports();

  return (
    <Grid item style={styles.outerbox}>
      <Grid container>
        <Grid item xs={12} style={styles.head1}>
          <TypographyComponent variant="heading1" text="Reports" />
        </Grid>
        <Grid item xs={12} style={styles.head2}>
          <TypographyComponent variant="heading4" text="Upcoming Reports" />
        </Grid>
        {reports.filter((item) => item.reportStatus === "upcoming").map((data, key) => {
            return (
              <Grid item xs={12} style={styles.box1}>
                <ReportCard
                  labName={data.labName!}
                  testName={data.testName!}
                  variant={"upcoming"}
                />
              </Grid>
            )
        })}
        <Grid item xs={12} style={styles.head3}>
          <TypographyComponent variant="heading4" text="Recent Reports" />
        </Grid>

        {reports.filter((item) => item.reportStatus === "Generated").map((data, key) => {
            return (
              <Grid item xs={12} style={styles.box1}>
                <ReportCard
                  labName={data.labName!}
                  testName={data.testName!}
                  variant={"recent"}
                  date={data.reportDownload!}
                  time={data.reportTime!}
                />
              </Grid>
            )
        })}
      </Grid>
    </Grid>
  );
};
const ReportsPage = () => {
  return (
    <>
      <BasicTemplate body={<Body />} header={<Header activeItem={"Reports"} />} />
    </>
  );
};

export default ReportsPage;
