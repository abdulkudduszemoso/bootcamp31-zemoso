import { Grid, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import CheckBox from "../../atoms/CheckBox/index";
import BasicDatePicker from "../../atoms/DatePicker";
import TextField from "../../atoms/InputField";
import RadioButton from "../../atoms/RadioButton";
import TypographyComponent from "../../atoms/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";


let useStyles = makeStyles({
  timeSelectionDiv: {
    width: 268,
    height: 144,
    display: "flex",
    flexWrap: "wrap",
    gap: "12px 12px",
  },
  timeChip: {
    borderRadius: 16,
  },
  chipDefault: {
    backgroundColor: "#E9E8ED",
  },
  chipSelected: {
    backgroundColor: "#9E62B2",
  },
});

export interface PatientDetails {
    id?: number,
    patientName: string | null,
    gender: string | null,
    dob: any,
    relation: string | null,
    selected?: boolean,
    userId: number
}

const sxStyles = {
  container: {
    width: "583px",
    height: "560px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)"
  },
  heading: {
    marginLeft: "24px",
    marginTop: "24px",
    gap: "20px",
    display: "flex",
    flexDirection: "column",
  },

  name: {
    width: "535px",
    height: "58px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginLeft: "24px",
  },
  gender: {
    width: "100%",
    height: "64px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "24px",
  },
  genderSelect: {
    display: "flex",
    gap: "30",
    marginLeft:"-6px"
  
  },

  checkbox: {
    marginLeft: "13px",
  },
  chips: {
    marginLeft: "24px",
  },
  genderTitle:{
    marginBottom:"13px"
  }
};

const AddPatient = () => {
  let styles = useStyles();
  let names = ["Myself", "Mother", "Father", "Son", "Daughter", "Others"];

  let [state, setState] = useState(-1);

  const nameChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
      localStorage.setItem("name", e.currentTarget.value)
  }

  const dateChangeEvent = (value: string) => {
      localStorage.setItem("date", value)
  }

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      localStorage.setItem("gender", e.currentTarget.value)
  }

  let setIndex = (key: number) => {
    setState(key);
    localStorage.setItem("relation", names[key])
  };

  return (
    <>
      <Grid container sx={sxStyles.container}>
        <Grid item sx={sxStyles.heading}>
          <TypographyComponent
            variant="heading4"
            color="secondary.main"
            text="Add Patient Details"
          />
          <TypographyComponent
            variant="body6"
            color="secondary.light"
            text="Booking for whom"
          />
        </Grid>
        <Grid sx={sxStyles.chips}>
          

          <Stack direction="row" spacing={1}>
            {names.map((item, index) => {
              return (
                <Chip
                  className={`${styles.timeChip} ${
                    index === state ? styles.chipSelected : styles.chipDefault
                  }`}
                  onClick={() => setIndex(index)}
                  label={
                    <TypographyComponent
                      text={item}
                      variant="body1"
                      color={index === state ? "white" : "secondary.main"}
                    />
                  }
                  key={index}
                />
              );
            })}
          </Stack>
        </Grid>
        <Grid container sx={sxStyles.name}>
          <TypographyComponent
            variant="body6"
            color="secondary.light"
            text="Name"
          />
          <TextField onChange={nameChangeEvent} />
        </Grid>
        <Grid container sx={sxStyles.name}>
          <BasicDatePicker
            label="Date of Birth"
            intialValue={new Date()}
            onChange={dateChangeEvent}
          />
        </Grid>
        <Grid item sx={sxStyles.gender}>
          <Grid sx={sxStyles.genderTitle} >
            <TypographyComponent
              variant="body1"
              color="secondary.main"
              text="Gender"
            />
          </Grid>

          <Grid  sx={sxStyles.genderSelect}>
          <RadioGroup onChange={handleRadioGroupChange} row>
            <RadioButton name="gender" value="Male" label="Male" />
            <RadioButton name="gender" value="Female" label="Female" />
            <RadioButton name="gender" value="Others" label="Others" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid sx={sxStyles.checkbox}>
          <CheckBox label="Save details for future" />
        </Grid>
      </Grid>
    </>
  );
};

export default AddPatient;
