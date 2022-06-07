import { Stepper, Step, StepIcon, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Colors } from "../../../theme/theme";
import { StepperData } from "../../../utils/constants";
import TypographyComponent from "../../atoms/Typography/index";

const useStyles = makeStyles({
  main: {
    width: 538,
    height: 628,
    display: "flex",
    flexDirection: "column",
    gap: 32,
    position: "relative",
  },
  container: {
    position: "absolute",
    width: 248,
    height: 454,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  stepDiv: {
    display: "flex",
    gap: "16px",
    width: 500,
  },
  imageDiv: {
    borderRadius: "50%",
    border: "1px solid " + Colors.unfinished,
    width: 44,
    height: 44,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeDiv: {
    border: "1px solid " + Colors.chip_selected,
  },
  finishedDiv: {
    border: "1px solid " + Colors.chip_selected,
    backgroundColor: Colors.chip_selected,
  },
  textDiv: {
    position: "relative",
    width: 193,
    height: 40,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  subIconDiv: {
    width: 116,
    height: 28,
    backgroundColor: Colors.light_grey,
    display: "flex",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

const lineStyles = {
  "& .MuiStepConnector-line": {
    minHeight: 46,
    position: "relative",
    left: 10,
  },
  "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
    borderColor: Colors.chip_selected,
  },
};

const TrackOrder = () => {
  const styles = useStyles();

  const stepValue = 1;

  return (
    <Box className={styles.main}>
      <Box className={styles.container}>
        <TypographyComponent
          text="Track your order"
          variant="heading2"
          color="secondary.dark"
        />
        <Box>
          <Stepper
            orientation="vertical"
            activeStep={stepValue}
            sx={lineStyles}
          >
            {StepperData.map((item, index) => {
              return (
                <Step key={index}>
                  <Box className={styles.stepDiv}>
                    <Box
                      className={`${styles.imageDiv} ${
                        stepperClass()
                      }`}
                    >
                      <StepIcon
                        icon={
                          <img
                            src={item.icon}
                            width={item.imgWidth}
                            height={item.imgHeight}
                            alt="img"
                          />
                        }
                      />
                    </Box>
                    <Box className={styles.textDiv}>
                      <TypographyComponent
                        text={item.text}
                        variant="heading2"
                        color="secondary.main"
                      />
                      {item.subIcon ? (
                        <Box className={styles.subIconDiv}>
                          <img
                            src={item.subIcon}
                            width={20}
                            height={20}
                            alt="Esther"
                          />
                          <TypographyComponent
                            variant="body3"
                            text={item.subText}
                            color="secondary.light"
                          ></TypographyComponent>
                        </Box>
                      ) : isSubText()}
                    </Box>
                  </Box>
                </Step>
              );

              function isSubText(): React.ReactNode {
                if(item.subText){
                  return (<Box>
                    <TypographyComponent
                      variant="body3"
                      color="secondary.light"
                      text={item.subText} />
                  </Box>)
                }
                return null;
              }

              function stepperClass() {
                if(stepValue === index){
                  return styles.activeDiv;
                }
                return stepValue > index ? styles.finishedDiv : "";
              }
            })}
          </Stepper>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackOrder;
