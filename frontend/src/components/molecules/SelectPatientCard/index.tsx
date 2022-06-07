import { Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import CheckBox from "../../atoms/CheckBox/index"
import theme,{Colors} from "../../../theme/theme"
import Buttons from "../../atoms/Button/index"

interface ISelectPatientCardProps{
    patientName: string | null,
    relation: string | null,
    gender: string | null,
    age: any,
    checked?: any,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SelectPatientCard = ({
    patientName = '',
    relation = '',
    gender = '',
    age = '',
    checked = false,
    onClick
}: ISelectPatientCardProps) => {
    let [checkedState, setCheckedState] = useState(checked)

    const sxStyle = {
        patientCardGrid:{
            display: 'flex',
            flexDirection: 'row',
            width: '535',
            height: 40
        },
        editButton:{
            marginLeft: '240px',
            marginTop: '0.75rem'
        },
        patientDetails:{
            marginTop: '0.625rem',
            width: 170
        }
    }

    const handleState = () => {
        setCheckedState(!checkedState)
    }

    return(
        <Grid sx={sxStyle.patientCardGrid}>
            <Grid item>
                <CheckBox checked={checkedState} onClickEvent={(event: React.MouseEvent<HTMLButtonElement>) => {onClick?.(event); handleState();}} />
            </Grid>
            <Grid item sx={sxStyle.patientDetails}>
                <Typography
                 color={theme.palette.secondary.dark}>
                     {patientName}
                </Typography>
                <Typography
                 color={Colors.low_emphasis}>
                     {relation}, {gender}, {age}
                </Typography>
            </Grid>
            <Grid item sx={sxStyle.editButton} >
                <Buttons 
                    name="Edit"
                    variant="text"
                    variantSize="medium"
                    size={'0.875rem'}
                />
            </Grid>
        </Grid>
    )
}

export default SelectPatientCard;